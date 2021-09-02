<?php

namespace App\Imports;

use App\Models\Distributor;
use App\Models\LoyaltyPoint;
use App\Models\Ticket;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithCustomCsvSettings;
use App\Models\File;


class DistrictsV2Import implements ToCollection, WithChunkReading, ShouldQueue, WithCustomCsvSettings
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
     */
    public function collection(Collection $rows)
    {
        foreach ($rows as $key => $row) {
            $identifier = $row->get(0);
            $name = $row->get(1);
            $phone = $row->get(2);
            $points = $row->get(5)??0;

            $name = explode('Enviar', $name);
            $name = explode('Magnificar', $name[0]);
            $name = explode(',', $name[0]);
            $name = str_replace(',', '', implode('', $name));

            $distributor = Distributor::updateOrCreate(['identifier' => $identifier], [
                'name' => $name,
                'phone' => str_replace('-', '', $phone)
            ]);

            $now = now();
            LoyaltyPoint::updateOrCreate(
                ['distributor_id' => $distributor->id, 'period' => $now->year.'-'.$now->month.'-01'],
                ['point' => $points]
            );

            $numTickets = intval(intval($points) / 100);

            for ($i = 0; $i < $numTickets; $i++) {
                Ticket::create([
                    'distributor_id' => $distributor->id,
                ]);
            }
        }
    }

    public function chunkSize(): int
    {
        return 200;
    }

    public function getCsvSettings(): array
    {
        return [
            'input_encoding' => 'Windows-1252'
        ];
    }
}
