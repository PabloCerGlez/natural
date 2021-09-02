import React, {useState} from "react";
import {Header} from "../../components/Header";
import {useForm} from "react-hook-form";

export const Contact = () => {

    const { register, handleSubmit, watch, setError, errors, reset } = useForm();
    const [ disableBtn, setDisableBtn ] = useState(false);

    const onSubmit = (data) => {
        setDisableBtn(true);
        dd(disableBtn);
        axios.post('/send_contact', data).then(response => {
            Swal.fire(
                '¡Gracias por tu mensaje!',
                '',
                'success'
            )
            reset();
            setDisableBtn(false);
            dd(disableBtn)
        }).catch(error => {
            if (error.response.status === 422) {
                const data = Object.values(Object.values(error.response.data)[1]);
                let message = `
                    <lo>
                        ${data.map(value => (`<li>${value}</li>`)).join('')}
                    </lo>`;

                Swal.fire(
                    '¡Ocurrió un error!',
                    message,
                    'error'
                )
            }
            setDisableBtn(false);
            dd(disableBtn);
        });
    }

    return (
        <>
            <Header
                img="/img/contact-header.png"
                title="Contáctanos"
                subTitle="ESTÁMOS EN CONTACTO"
            />

            <div className="px-5 lg:px-32 my-16">
                <div className="flex flex-col md:flex-row justify-between">
                    <div>
                        <h1 className="w-3/4">Horario de atención</h1>
                        <div className="my-5 text-xs">
                            <Info
                                title="MONDAY"
                                info="9AM – 7PM"
                            />
                            <Info
                                title="MARTES"
                                info="9AM – 7PM"
                            />
                            <Info
                                title="MIERCOLES"
                                info="9AM – 7PM"
                            />
                            <Info
                                title="JUEVES"
                                info="9AM – 7PM"
                            />
                            <Info
                                title="VIERNES"
                                info="9AM – 7:30PM"
                            />
                            <Info
                                title="SABADO"
                                info="10AM – 6:00PM"
                            />
                            <Info
                                title="DOMINGO"
                                info="10AM – 5:00PM"
                            />
                        </div>
                    </div>
                    <div>
                        <h1>
                            <i className="fab fa-whatsapp"/> (312) 595 6574
                        </h1>
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="mb-5">Mándanos un saludo</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/2 mb-2 md:mr-4">
                                <input name="name" ref={register({ required: true })} placeholder="Nombre" className="mb-2 rounded-md appearance-none border rounded w-full py-2 px-3 text-gray-450 leading-tight focus:outline-none focus:shadow-outline"/>
                                <span className="mb-2 ml-2 text-red-main">{errors.name ? 'El campo es requerido.' : ''}</span>
                            </div>
                            <div className="md:w-1/2 mb-2">
                                <input name="email" type='email' ref={register({ required: true })} placeholder="Email" className="mb-2 rounded-md appearance-none border rounded w-full py-2 px-3 text-gray-450 leading-tight focus:outline-none focus:shadow-outline"/>
                                <span className="mb-2 ml-2 text-red-main">{errors.email ? 'El campo es requerido.' : ''}</span>
                            </div>
                        </div>

                        <div className="mb-2">
                            <textarea placeholder="Mensaje" name="message" ref={register({ required: true })} rows="5" className="w-full rounded-md appearance-none border rounded w-full py-2 px-3 text-gray-450 leading-tight focus:outline-none focus:shadow-outline"/>
                            <span className="mb-2 ml-2 text-red-main">{errors.message ? 'El campo es requerido.' : ''}</span>
                        </div>

                        <div className="flex justify-end">
                            <button className="btn btn-success" disabled={disableBtn}>
                                ENVIAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

const Info = (props) => (
    <span className="flex md:justify-start mb-2">
        <p className="mr-2 ">{props.title}:</p><p className="font-bold">{props.info}</p>
    </span>
);
