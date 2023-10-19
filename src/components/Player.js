import React, {useEffect} from "react";
// Import the font awesome package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying, audioRef, setSongInfo, songInfo, songs, setCurrentSong, setSongs }) => {

  // Use Effect
  useEffect(() => {
    // Add active state
    const newSongs = songs.map((song) => {
      if(song.id === currentSong.id){
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
  }, [currentSong])

  // Event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({...songInfo, currentTime: e.target.value} )
  };

  const skipTrackHandler = (directions) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (directions === 'skip-forward'){
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    } 
    if (directions === 'skip-back'){
      if ((currentIndex - 1) % songs.length === -1){
        setCurrentSong(songs[songs.length - 1]);
        // we add return so when this piece of code is run the one below does not
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  }


  return (
    <div className="player">
      <div className="time-control">
        <p>{getTime(songInfo.currentTime)}</p>
        <input
          min={0}
          max={songInfo.duration || 0 }
          value={songInfo.currentTime}
          onChange={dragHandler}
          type="range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon 
        onClick={() => skipTrackHandler('skip-back')} 
        className="skip-play" 
        size="2x" 
        icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay }
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip-forward')} 
          className="skip-forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    
    </div>
  );
};

export default Player;
