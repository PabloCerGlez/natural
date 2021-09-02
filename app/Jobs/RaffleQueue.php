<?php

namespace App\Jobs;

use App\Models\Raffle;
use App\Models\RaffleStatus;
use App\Models\Ticket;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class RaffleQueue implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    private $raffle_id;

    /**
     * Create a new job instance.
     *
     * @param $raffle_id
     */
    public function __construct($raffle_id)
    {
        $this->raffle_id = $raffle_id;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $raffle = Raffle::find($this->raffle_id);
        if ($raffle->reffle_status_id == RaffleStatus::PENDING) {
            $winner = Ticket::whereId(rand(1, Ticket::count()))->first();

            $raffle->distributor_id = $winner->distributor_id;
            $raffle->reffle_status_id = RaffleStatus::END;
            $raffle->save();
        }
    }
}
