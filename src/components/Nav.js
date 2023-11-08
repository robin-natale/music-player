import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
 faMusic,
 faSun,
 faMoon
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({setLibraryStatus, libraryStatus, setDarkModeStatus, darkModeStatus}) =>{
    return(
        <nav>
            <button className="library__button-open" onClick={() => setLibraryStatus(!libraryStatus)}>
                <span>Library</span>
                <FontAwesomeIcon icon={faMusic} />
            </button>
            {/* TODO: Add new name or logo */}
            <h1 class="hidden">Waves</h1>
            <button className="dark__mode-toggle" onClick={() => setDarkModeStatus(!darkModeStatus)}>
                    <FontAwesomeIcon icon={faSun} className={` ${darkModeStatus ? '' : 'hidden'}`} />
                    <FontAwesomeIcon icon={faMoon} className={` ${darkModeStatus ? 'hidden' : ''}`} />
            </button>
        </nav>
    )
}

export default Nav;