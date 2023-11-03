import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const Nav = ({setLibraryStatus, libraryStatus, setDarkModeStatus, darkModeStatus}) =>{
    return(
        <nav>
            {/* TODO: Add new name or logo */}
            <h1>Waves</h1>
            <button className="dark__mode-toggle" onClick={() => setDarkModeStatus(!darkModeStatus)}>
                    <FontAwesomeIcon icon={faSun} className={` ${darkModeStatus ? '' : 'hidden'}`} />
                    <FontAwesomeIcon icon={faMoon} className={` ${darkModeStatus ? 'hidden' : ''}`} />
            </button>
            <button className="button__library" onClick={() => setLibraryStatus(!libraryStatus)}>
                <span>Library</span>
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;