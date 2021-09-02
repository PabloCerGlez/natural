import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {confetti} from '../utilities/confetti';

const Raffle = (props) => {
    const raffle = JSON.parse(props.raffle);

    const calculateTimeLeft = () => {
        const dateRaffle = raffle.date.split('-');
        let hour = dateRaffle[2].split(' ');
        const difference = Date.parse(`${dateRaffle[0]}-${dateRaffle[1]}-${hour[0]}T${hour[1]}-05:00`) - Date.parse(new Date());

        let timeLeft2 = {};

        if (difference > 0) {
            timeLeft2 = {
                Días: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
                Minutos: Math.floor((difference / 1000 / 60) % 60),
                Segundos: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft2;
    };

    const getWinner = (data) => {
        if (! confetti.isRunning()) {
            confetti.start();
        }
        return (
            <div key={data.id}>
                <p>Nombre: <strong>{data.distributor.name}</strong></p>
                <p>ID: <strong>{data.distributor.identifier}</strong></p>
            </div>
        );
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());
    const [winner, setWinner] = useState(raffle.distributor?.name ? getWinner(raffle) : '');

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
        );
    });

    if (timerComponents.length === 0) {
        if (winner == '' || winner == 'El ganador es...') {
            confetti.start();
            setWinner('El ganador es...');
            dd(winner)
            axios.get('/raffle/'+raffle.id+'?axios=true').then(response => {
                dd(response);
                if (response.status === 200 && response.data.distributor?.name) {
                    dd(response.data);
                    setWinner(getWinner(response.data))
                }
            });
        }
    }

    return (
        <div>
            {timerComponents.length ?
                <h3>{timerComponents}</h3> :

                <div>
                    <h1>Ganador</h1>
                    {winner}
                </div>
            }
        </div>
    );
}

if (document.getElementById('raffleReact')) {
    // find element by id
    const element = document.getElementById('raffleReact')

    // create new props object with element's data-attributes
    // result: {tsId: "1241"}
    const props = Object.assign({}, element.dataset)

    // render element with props (using spread)
    ReactDOM.render(<Raffle {...props}/>, element);
}
