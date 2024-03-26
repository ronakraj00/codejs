import "../css/header.css";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function header() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <div className="logo-wrapper">
                <img className="logo" src="travel-logo.jpg" alt="" />
            </div>

            <nav ref={navRef} className="navLinks">

                <div className="search-wrapper">
                    <label htmlFor="search">
                        <input id="search" type="search" className="search" />
                    </label>

                    <label htmlFor="searchButton">
                        <button className="searchButton" onClick>
                            Search
                        </button>
                    </label>
                </div>
                <div className="menu-wrapper"><img src="" alt="" />menu
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </div>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>

        </header>
    );
}

export default header;
