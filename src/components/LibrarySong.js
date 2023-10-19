import React from "react";
import {playAudio} from "../util"
const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
  const songSelectHandler = () =>{
    setCurrentSong(song);
    // add Active state
    const newSongs = songs.map((song) => {
      if(song.id === id){
        return{
          // keep everything the same, just change the state
          ...song,
          active: true,
        };
      } else {
        return{
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    // check if song is playing
    playAudio(isPlaying, audioRef);
  };

  return (
    <div onClick={songSelectHandler} className={`library-song ${song.active ? `selected` : "" }`}>
      <img alt={song.name} src={song.cover}></img>
      <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
