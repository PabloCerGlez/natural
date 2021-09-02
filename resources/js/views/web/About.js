import React from "react";
import {Header, Title} from "../../components/Header";

export const About = () => {
    return (
        <>
            <Header
                img="/img/acerca-de-header.png"
                title="Serenity"
                subTitle="PRODUCTO DEL MES"
            />

            <div className="text-center px-5 lg:px-32 my-16">
                <h1>Bienvenido a </h1>
                <h1 className="text-green-main">mi sitio web</h1>

                <p className="text-center md:px-48 py-10">El poder de la Madre Naturaleza que mediante los aceites esenciales te ayudan a llevar una vida sana y equilibrada, trayendo bienestar y alegría a tu vida y a la de tu familia.</p>

                <div className="flex flex-col md:flex-row justify-center">
                    <div className="">
                        <img src="/img/lucy-pic.png" style={{marginTop: '-50px'}}/>
                    </div>
                    <div className="md:w-1/2">
                        <h2>Historia</h2>
                        <p className="mb-5 text-sm">Mi viaje con dōTERRA empezó cuando me decidí a buscar opciones más saludables para mi vida y la de mi familia, mi hijo tenía muchos problemas con alergias y era muy enfermizo y mi esposo sufría de migrañas muy fuertes y agruras constantes, ninguna medicina era suficiente para controlar sus padecimientos, por lo tanto puse manos a la obra en búsqueda de una solución y fue cuando comenzamos a utilizar los aceites esenciales como sustitutos de químicos y medicamentos. Al poco tiempo habíamos logrado tener un hogar libre de tóxicos y nuestra salud y bienestar aumentaron significativamente, poco después quise comenzar a compartir todos los conocimientos que adquirí para que más personas de mi comunidad pudieran aprovechar los múltiples beneficios de este nuevo estilo de vida y así fue como surgió Poder Naturalia, una poderosa herramienta que día a día me permite crecer y ver el empoderamiento de todas las personas que forman parte de dōTERRA, me permite observar su crecimiento como líderes y promotoras de bienestar natural.</p>
                        <p className="mb-5 text-sm">Mi mayor satisfacción es cuando me comparten sus testimonios de cómo los aceites han ayudado a sus familias y como madre, me mueve el ser un ejemplo para mi hijo, el que él pueda ver que tiene una mamá que trabaja, que atiende su hogar, que hace deporte y que comparte tiempo con su familia y amigos.</p>
                        <p className="mb-5 text-sm">Para mí, Poder Naturalia es un arma que me permite saber que las cosas se pueden lograr sólo con las alternativas que nos da la naturaleza, que nos otorga ese poder, esa vibra y esa energía de volver a nuestras raíces y poder curarnos y mantener una vida más saludable como lo hacían nuestros ancestros.</p>
                        <p className="mb-5 text-sm">Te invito a que formes parte junto conmigo y muchas personas más de esta gran comunidad que nos apoyamos, que nos empoderamos para saber que nosotros podemos generar, hacer y ser hombres y mujeres ejemplares, descubrir en nosotros mismos cosas que jamás imaginamos y compartir nuestros conocimientos sobre los poderes de la naturaleza.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
