import React from "react";

const LibrarySong = ({ song, songs, setCurrentSong, id, audioRef, isPlaying, setSongs }) => {
  const songSelectHandler = async () =>{
    await setCurrentSong(song);
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
    if(isPlaying) audioRef.current.play();
  };

  return (
    <div onClick={songSelectHandler} className={`library__song ${song.active ? `selected` : "" }`}>
      <img alt={song.name} src={song.cover}></img>
      <div className="song__description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
