import React from "react";
import LibrarySong from "./LibrarySong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faClose} from "@fortawesome/free-solid-svg-icons";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus, setLibraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? 'active__library' : ''}`}>
      <div className="library__header">
        <h2>Library</h2>
        <button className="library__button-close" onClick={() => setLibraryStatus(!libraryStatus)}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </div>
      <div className="library__songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setCurrentSong={setCurrentSong}
            id={song.id}
            key={song.id}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
