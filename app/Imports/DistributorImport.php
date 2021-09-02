<?php

namespace App\Imports;

use App\Models\Distributor;
use App\Models\File;
use App\Models\Ticket;
use App\Models\LoyaltyPoint;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;

/**
 * @deprecated
 */
class DistributorImport implements ToCollection, WithChunkReading, ShouldQueue, WithCustomCsvSettings
{
    private $file;

    /**
     * @param File $file
     */
    public function __construct(File $file)
    {
        $this->file = $file;
    }

    /**
     * @param Collection $rows
     * @return void
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $key => $row) {
            $inscription = $this->parseDate($row->get(3));
            $lastOrder = $this->parseDate($row->get(6));
            $lastAutoOrder = $this->parseDate($row->get(10));

            $name = explode('Enviar', $row->get(1));
            $name = explode('Magnificar', $name[0]);
            $name = explode(',', $name[0]);
            $name = str_replace(',', '', implode('', $name));

            $distributor = Distributor::updateOrCreate(['identifier' => $row->get(2)], [
                'name' => $name,
                'inscription_at' => $inscription,
                'last_order_at' => $lastOrder,
                'last_auto_order_at' => $lastAutoOrder,
                'ranking' => $row->get(8),
                'highest_rank' => $row->get(9),
            ]);

            $now = now();
            LoyaltyPoint::updateOrCreate(
                [ 'distributor_id' => $distributor->id, 'period' => $now->year.'-'.$now->month.'-01'],
                ['point' => $row->get(19)??0]
            );

            $numTickets = intval(intval($row->get(19)) / 100);

            for ($i = 0; $i < $numTickets; $i++) {
                Ticket::create([
                    'distributor_id' => $distributor->id,
                ]);
            }
        }
    }

    public function parseDate($date)
    {
        try {
            $date = Carbon::createFromFormat('d/m/Y', $date);
        } catch (\Exception $e) {
            $date = null;
        }
        return $date;
    }

    public function getCsvSettings(): array
    {
        return [
            'input_encoding' => 'Windows-1252'
        ];
    }

    public function chunkSize(): int
    {
        return 200;
    }
}
