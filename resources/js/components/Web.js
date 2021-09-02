import ReactDOM from "react-dom";
import React, {Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Item, Nav} from "./Nav";
import {Recipes} from "../views/web/Recipes";
import {Shop} from "../views/web/Shop";
import {Blog} from "../views/web/Blog";
import {Home} from "../views/web/Home";
import {About} from "../views/web/About";
import {Contact} from "../views/web/Contact";
import {Post} from "../views/web/Post";

class ScrollToTop extends Component {
    componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) {
            window.scrollTo(0, 0)
        }
    }
    render() {
        return this.props.children
    }
}

const Web = (props) => {
    return (
        <Router>
            <ScrollToTop>
                <div>
                    <Nav logo="/logo-header.svg">
                        <Item link='/'>INICIO</Item>
                        <Item link='/about'>ACERCA DE</Item>
                        {/*<Item link='/recipes'>RECETAS</Item>*/}
                        {/*<Item link='/shop'>TIENDA</Item>*/}
                        {/*<Item link='/blog'>BLOG</Item>*/}
                        <Item link='/contact' noMigrate={true}>CONTACTO</Item>
                    </Nav>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                        <Route path="/recipes">
                            <Recipes/>
                        </Route>
                        <Route path="/shop">
                            <Shop/>
                        </Route>
                        {/*<Route exact path="/blog">*/}
                        {/*    <Blog/>*/}
                        {/*</Route>*/}
                        {/*<Route path="/blog/:id">*/}
                        {/*    <Post/>*/}
                        {/*</Route>*/}
                        <Route path="/contact">
                            <Contact/>
                        </Route>
                    </Switch>

                    {/*CERTIFICADOS*/}
                    <div className="pt-10 bg-gray-background" style={styles.certificates}>
                        <div className="px-3 lg:px-32 pb-32 md:pb-64">
                            <h1 className="text-center font-semibold">Certificados</h1>
                            <div className="text-center md:my-10 md:my-16">
                                <img className="w-2/5 inline-flex m-5" src="/img/certificates/doterra-certified.png"/>
                                <img className="w-2/5 inline-flex m-5" src="/img/certificates/doterra-wellness.png"/>
                            </div>
                        </div>
                    </div>

                    {/*FOOTER*/}
                    <div className="px-3 lg:px-32 pt-10 flex flex-col md:flex-row justify-center justify-around">
                        <div>
                            <img className="m-auto md:mb-5 text-center" src="/logo-footer.svg"/>
                            <div className="my-5 text-xs">
                                <span className="flex justify-center md:justify-start mb-2">
                                    <p className="font-bold mr-2 ">EMAIL:</p><p>info@podernaturalia.com</p>
                                </span>
                                <span className="flex justify-center md:justify-start">
                                    <p className="font-bold mr-2">TELÉFONO:</p><p>312 107 3600</p>
                                </span>
                            </div>
                            <div className="my-5 text-center md:text-left">
                                <Link to="/contact" className="btn btn-success">CONTÁCTANOS</Link>
                            </div>
                        </div>
                        <div className="md:py-8 flex flex-col font-bold text-sm text-center md:text-left">
                            <Link to="/" className="mb-1">Inicio</Link>
                            <Link to="about" className="my-1">Acerca de nosotros</Link>
                            <Link to="/recipes" className="my-1">Recetas</Link>
                            <Link to="/shop" className="my-1">Tienda</Link>
                            <Link to="/blog" className="my-1">Blog</Link>
                            <Link to="/contact" className="my-1">Contacto</Link>
                        </div>
                        <div className="py-8 font-bold text-sm text-center">
                            <a href="/login">Mi cuenta</a>
                        </div>
                        <div className="py-0 md:py-8 font-bold text-sm text-center md:text-left">
                            <Link to="/contact">Conecta con Nosotros</Link>
                            <div className="flex justify-center md:justify-start my-5">
                                <Link className="mr-2">
                                    <img src="/img/icon-fb.svg"/>
                                </Link>
                                <Link>
                                    <img src="/img/icon-insta.svg"/>
                                </Link>
                            </div>
                            {/*<div className="my-5">*/}
                            {/*    <a href="/login" className="btn btn-success">REGISTRARME</a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="px-3 lg:px-32 py-5 bg-gray-1000 text-white text-sm">
                        <div className="flex flex-col md:flex-row md:justify-between">
                    <span className="text-center">
                        © Copyright 2020 | Todos los derechos reservados. Poder Naturalia.
                    </span>
                            <span className="mt-3 md:mt-0 text-center">
                        <Link>Términos y condiciones</Link>
                    </span>
                            <span className="mt-3 md:mt-0 text-center">
                        <Link>Políticas de privacidad</Link>
                    </span>
                        </div>
                    </div>
                </div>
            </ScrollToTop>
        </Router>
    );
}

const styles = {
    certificates: {
        backgroundImage: "url('/img/image-footer.png')",
        backgroundPosition: 'center bottom',
        backgroundSize: 'contain',
        backgroundRepeat: "no-repeat"
    },
}


if (document.getElementById('webReact')) {
    // find element by id
    const element = document.getElementById('webReact')

    // create new props object with element's data-attributes
    // result: {tsId: "1241"}
    const props = Object.assign({}, element.dataset)

    // render element with props (using spread)
    ReactDOM.render(<Web {...props}/>, element);
}
