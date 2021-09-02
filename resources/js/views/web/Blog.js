import React from "react";
import {Header} from "../../components/Header";
import {Link} from "react-router-dom";

export const Blog = () => {
    return (
        <>
            <Header
                img="/img/blog-header.png"
                title="Nuestro Blog"
                subTitle="CERGLEZ"
            />

            <div className="px-5 lg:px-32 my-16">
                <div className="mb-5">
                    <img className="w-full mb-5" src="/img/blog/blog-main-post.png" />
                    <h1 className="mb-2">Título del Último Blogpost</h1>
                    <p className="mb-2 text-red-main font-bold">Juan Pablo Cervantes Gonzalez | Sep 9, 2020 | Catogoría</p>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                </div>

                {/*<div className={`flex`}>
                    <div className="flex-1 h-64 w-64" style={{ backgroundImage: `url("img/recipes/recipe_1.jpeg")` }}/>
                    <div className="flex-1" style={{ backgroundImage: `url("img/recipes/recipe_2.jpeg")` }}/>
                    <div className="flex-1" style={{ backgroundImage: `url("img/recipes/recipe_3.jpeg")` }}/>
                </div>*/}

                <div className="flex flex-col md:flex-row justify-between pt-10 pb-0 sm:py-10">
                    <LastPost
                        img="img/recipes/recipe_1.jpeg"
                        url=""
                        title="Lorem ipsum dolor sit amet, consecteuter"
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                        className="mr-10"
                    />
                    <LastPost
                        img="img/recipes/recipe_2.jpeg"
                        url=""
                        title="Lorem ipsum dolor"
                        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
                        className="mr-10"
                    />
                    <LastPost
                        img="img/recipes/recipe_3.jpeg"
                        url=""
                        title="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor."
                        description="asdlmasñ"
                    />
                </div>
            </div>
        </>
    )
}

export const LastPost = (props) => {
    const {img, url, title, description, className} = props;

    return (
        <div className={`flex-column ${className}`}>
            <div className="flex-row w-64">
                {
                    img !== null ?
                        <div className="bg-no-repeat bg-cover h-64 mb-3" style={{ backgroundImage: `url("${img}")` }} />
                    : null
                }
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="mb-2">{description}</p>
                {url !== null ? <Link to={url} className="text-red-main font-bold">Leer articulo <i className="fas fa-arrow-right"/></Link>  : null}
            </div>
        </div>
    )
}



