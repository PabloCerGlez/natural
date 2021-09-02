import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Flickity from 'react-flickity-component'
import {Title} from "../../components/Header";

export const Home = () => {

    const [carousel, setCarousel] = useState([])
    const [flkty, setflkty] = useState(null)

    const myCustomNext = () => {
        flkty.next();
    };

    const myCustomPre = () => {
        flkty.previous();
    };

    useEffect(() => {
        axios.get('/carousel').then(response => {
            setCarousel(response.data.map((data) => (
                <Title
                    img={`/storage/${data.img}`}
                    title={data.title}
                    subTitle={data.subtitle}
                    description={data.description}
                />
            )));
        })
    }, []);

    const flickityOptions = {
        autoPlay: 10000,
        pauseAutoPlayOnHover: true,
        draggable: true,
        freeScroll: true,
        wrapAround: true
    }

    return (
        <>
            {/*/!*CARROUSEL*!/*/}
            <Flickity
                flickityRef={c => (setflkty(c))}
                options={flickityOptions}
            >
                {carousel}
            </Flickity>
            <button style={{zIndex:1000}} className="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous" onClick={myCustomPre}>
                <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow"></path>
                </svg>
            </button>
            <button style={{zIndex:1000}} className="flickity-button flickity-prev-next-button next" type="button" aria-label="Next" onClick={myCustomNext}>
                <svg className="flickity-button-icon" viewBox="0 0 100 100">
                    <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) "></path>
                </svg>
            </button>

            {/*/!*INICIO*!/*/}
            <div className="bg-gray-background">
                <h1 className="title-home px-5">Poder Naturalia</h1>

                <div className="px-10 lg:px-32 flex flex-col md:flex-row justify-center justify-around pb-10 ">

                    <div className="md:py-24 flex flex-col text-sm text-center md:text-left w-full">
                        <h3 className="font-semibold text-green-main title">BIENVENIDO A NUESTRA COMUNIDAD</h3>
                        <h1 className="font-semibold">El poder de la Madre Naturaleza</h1>

                        <p className="py-5">
                            La importancia de la naturaleza para la vida es total y absoluta .
                            La naturaleza es de donde obtenemos los insumos que fundamentan nuestra economía y también de dónde proviene el oxígeno que respiramos, la materia que nos alimenta y las condiciones físicas  que sostienen la posibilidad de vida en el planeta.
                            De modo que todo lo que existe y todo lo que conocemos es también naturaleza.
                        </p>

                        <p className="py-5">
                            Ahora bien  las plantas llevan siglos acompañándonos y son un remedio natural para mejorar en diversos aspectos de salud física y emocional.
                            De esta manera las plantas, llámense flores, tallos, raíces y hasta las especias nos apoyan a regular muchos aspectos de nuestra salud y nos permiten llevar una vida sana.
                        </p>

                        {/*<span className="mt-3 md:text-left text-center">*/}
                        {/*    <Link className="btn btn-success">VER MÁS</Link>*/}
                        {/*</span>*/}
                    </div>

                    <div className="flex flex-col text-center">
                        <img src="/img/doterra.png"/>
                    </div>
                </div>
            </div>

            {/*RECETAS*/}
            <div className="px-3 lg:px-32 py-10 text-center">
                <h1 className="text-center">Recetas</h1>
                <div className="flex flex-col md:flex-row justify-center justify-around pt-10 pb-0 sm:py-10">
                    <Card img="/img/recipes/recipe_1.jpeg">Dolor de Cabeza</Card>
                    <Card img="/img/recipes/recipe_2.jpeg">Sistema Inmunológico</Card>
                    <Card img="/img/recipes/recipe_3.jpeg">Comenzar tu mañana</Card>
                    <Card img="/img/recipes/recipe_4.jpeg">Piel Sana</Card>
                </div>

                <Link to="/recipes" className="btn btn-success">
                    VER TODAS LAS RECETAS
                </Link>
            </div>

            {/*/!*RIFAS*!/*/}
            {/*<div className="py-10">*/}
            {/*    <div className="grid grid-rows-1 grid-flow-col gap-0">*/}
            {/*        <div className="py-10 my-16 row-span-3 w-64" style={styles.raffle}/>*/}
            {/*        <div className="row-span-3 bg-red-main py-10 pl-10 rounded-tl-lg" style={{borderTopLeftRadius: "3.5rem"}}>*/}
            {/*            <h1 className="text-white w-1/2 mt-5 text-6xl table-caption">Rifa Mensual</h1>*/}

            {/*            <p className="text-white mt-5 text-xl">Nuevo difusor Volo</p>*/}

            {/*            <div className="grid grid-rows-1 grid-flow-col gap-0 pr-16 mt-24">*/}
            {/*                <Timer unit="Días">02</Timer>*/}
            {/*                <Timer unit="Horas">12</Timer>*/}
            {/*                <Timer unit="Segundos" noBorder={true}>15</Timer>*/}
            {/*            </div>*/}

            {/*            <div className="pr-16 mt-32">*/}
            {/*                <button className="btn bg-red-light text-white">*/}
            {/*                    VER LISTA DE PARTICIPANTES*/}
            {/*                </button>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*        <div className="row-span-1 col-span-3" style={styles.raffleImage}/>*/}
            {/*        <div className="row-span-2 col-span-3 p-5 mb-24">*/}
            {/*            <h3 className="montserrat mb-3">¿Cómo puedo participar?</h3>*/}
            {/*            <p className="w-1/2 text-justify">Al formar parte de nuestra comunidad tienes el beneficio de participar en nuestra rifa mensual, solo tienes que tener cumplir con un fácil requisito, tener mínimo 100 puntos Doterra al mes.</p>*/}
            {/*        </div>*/}

            {/*    </div>*/}
            {/*</div>*/}

            {/*/!*ARTÍCULOS RECIENTES*!/*/}
            {/*<div></div>*/}

            {/*SE PARRE DE NUESTRA COMUNIDAD*/}
            <div className="py-10" style={styles.community}>
                <div className="px-10 lg:px-32 w-full sm:w-9/12 md:w-8/12" >
                    <h3 className="title font-semibold text-green-main">PODER NATURALIA</h3>
                    <h1 className="font-semibold">Sé Parte de Nuestra Comunidad</h1>
                    <p className="py-5">Te invitamos a participar en nuestra comunidad activa. Contamos con grupo en Whatsapp y Facebook en donde se comparten recetas y asesorías. Contamos con clases semanales de educación continua, las cuales son impartidas por personas professionals en el area de la salud y  certificadas por doTERRA. Algunos de los temas a tratar son los siguientes: embarazo, lactancia, gourmet, sexualidad, emociones, cuidado de la piel, mascotas, entre otros temas.</p>
                    <div className="text-center sm:text-left">
                        {/*<a href="/login" className="btn btn-success">*/}
                        {/*    REGISTRARME*/}
                        {/*</a>*/}
                    </div>
                </div>
            </div>

            {/*/!*TESTIMONIOS*!/*/}
            <div className="px-3 lg:px-32 py-10 text-center">
                <img className="absolute" src="/img/quote.svg"/>
                <h3 style={{font: "normal normal 600 14px/18px Montserrat"}}>TESTIMONIALES</h3>
                <h1 className="text-center">Experiencias</h1>
                <div className="mt-5">
                    <Flickity
                        className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        //options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate={true} // default false
                    >
                        <div className="px-0 md:px-20 lg:px-64 ">
                            {/*<div className="rounded-full h-40 w-40 flex items-center justify-center bg-gray-background m-auto"*/}
                            {/*     style={{*/}
                            {/*         backgroundImage:`url('/img/recipes/recipe_3.jpeg')`,*/}
                            {/*         backgroundPosition: 'center',*/}
                            {/*         backgroundSize: 'cover'*/}
                            {/*     }}*/}
                            {/*/>*/}
                            <div className="mt-5">
                                <span style={{color:'#83B20F'}}>
                                    <i className="fas fa-star m-1"></i>
                                </span>
                                <span style={{color:'#83B20F'}}>
                                    <i className="fas fa-star m-1"></i>
                                </span>
                                <span style={{color:'#83B20F'}}>
                                    <i className="fas fa-star m-1"></i>
                                </span>
                                <span style={{color:'#83B20F'}}>
                                    <i className="fas fa-star m-1"></i>
                                </span>
                                <span style={{color:'#83B20F'}}>
                                    <i className="fas fa-star m-1"></i>
                                </span>
                            </div>
                            <p className="p-5 text-center">
                                Con Doterra pude iniciar un camino más saludable, la pérdida de peso no fue rápida pero si constante y lo mejor es que después de 5 años no he tenido ningún rebote ya que de la mano de mis aceites establecí hábitos saludables que me han traído múltiples beneficios tanto en lo físico  (hormonal, metabólico, digestivo) como en lo emocional.
                            </p>
                        </div>

                    </Flickity>
                </div>

            </div>
        </>
    )
}


const Card = (props) => {
    const {img, children} = props;

    return (
        <div className="text-center justify-content-center m-auto mb-10 sm:mb-0">
            <div className="rounded-full h-40 w-40 flex items-center justify-center bg-gray-background m-auto"
                 style={{
                     backgroundImage:`url('${img}')`,
                     backgroundPosition: 'center',
                     backgroundSize: 'cover'
                 }}
            />

            <div className="pt-2">
                <h3>{children}</h3>
            </div>
        </div>
    );
}

const Timer = (props) => {
    const {children, unit, noBorder} = props;

    const getBorder = () => {
        if (noBorder) {
            return '';
        }
        return 'border-r'
    }

    return (
        <div className={`row-span-1 border-solid border-white ${getBorder()}`}>
            <h1 className="timer text-white text-center">{children}</h1>
            <p className="timer text-center uppercase">{unit}</p>
        </div>
    )
}

const styles = {
    raffle: {
        backgroundImage: "url('/img/palmas.png')",
    },
    raffleImage: {
        backgroundImage: "url('/img/imagen-rifa.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '439px',
        backgroundRepeat: "no-repeat"
    },
    community: {
        backgroundImage: "url('/img/register-image.png')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: "no-repeat"
    },
    arrowNext: {
        backgroundImage: "url('/img/orientation.svg')",
        backgroundPosition: 'center bottom',
        backgroundSize: 'contain',
        backgroundRepeat: "no-repeat"
    }
}
