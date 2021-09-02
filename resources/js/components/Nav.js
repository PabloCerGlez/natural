import React, {useState} from "react";
import {Link} from "react-router-dom";


export const Nav = (props) => {
    const {logo} = props;

    const [flagMenu, setFlagMenu] = useState(null);

    const showOrHideMenu = () => {
        if (flagMenu == null) {
            if (window.screen.width <= 1023) {
                setFlagMenu(true)
            } else {
                setFlagMenu(false)
            }
            return;
        }

        if (flagMenu === true) {
            setFlagMenu(false);
        } else {
            setFlagMenu(true);
        }
    }

    return (
        <div className="fixed top-0 left-0 right-0 bg-white bro border-b-1 border-gray-main" style={{zIndex: '1001'}}>
            <div className="bg-gray-main text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex md:justify-between md:items-center py-1 md:space-x-10">
                        <div className="flex-col lg:w-0 flex-1 text-center sm:text-right sm:mr-48">
                            <a href="mailto:info@cerglez.com" className="text-white text-center sm:inline sm:text-right">info@cerglez.com</a>
                            <p className="text-white text-center sm:inline sm:text-right mx-1 hidden">|</p>
                            <a href="tel:312 107 3600" className="text-white text-center sm:inline sm:text-right">312 107 3600 </a>
                            <a href="/login" className="text-green-main mx-0 text-center sm:inline sm:text-right sm:mx-5">Mi cuenta</a>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <Link to="/">
                        <img className="h-8 w-auto sm:h-10 h-8 w-8 mr-2" src={logo} alt="PoderNaturalia"/>
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={showOrHideMenu}
                        className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block" style={flagMenu === true ? {display:'block'} : {}}>
                    <div className="text-sm lg:flex-grow text-left mr-48 lg:text-right">
                        {props.children}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export const Item = (props) => {
    const {children, link, noMigrate} = props;

    const getMigrate = () => {
        return noMigrate ? '' : 'mr-4';
    };

    return (
        <Link to={link} className={`font-semibold block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-900 ${getMigrate()}`}>
            {children}
        </Link>
    );
}
