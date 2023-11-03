import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({setLibraryStatus, libraryStatus}) =>{
    return(
        <nav>
            {/* TODO: Add new name or logo */}
            <h1>Waves</h1>
            {/* TODO: Add darkmode icon */}
            <button className="button__library" onClick={() => setLibraryStatus(!libraryStatus)}>
                <span>Library</span>
                <FontAwesomeIcon icon={faMusic} />
            </button>
        </nav>
    )
}

export default Nav;