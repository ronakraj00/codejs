import "../css/header.css";
import { useRef } from "react";
function header() {
    return (
        <header>
            <div className="logo-wrapper">
                <img className="logo" src="travel-logo.jpg" alt="" />
            </div>
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
            <div className="menu-wrapper"><img src="" alt="" />menu</div>
        </header>
    );
}

export default header;
