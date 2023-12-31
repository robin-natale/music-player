import React from "react";
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

  const activeLibraryHandler = ( nextPrev ) => {
    const newSongs = songs.map((song) => {
      if(song.id === nextPrev.id){
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
  }
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

  const skipTrackHandler = async (directions) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (directions === 'skip_forward'){
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex + 1) % songs.length]);
    } 
    if (directions === 'skip_back'){
      if ((currentIndex - 1) % songs.length === -1){
        await setCurrentSong(songs[songs.length - 1]);
        activeLibraryHandler(songs[songs.length - 1]);
        if(isPlaying) audioRef.current.play();
        // we add return so when this piece of code is run the one below does not
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
      activeLibraryHandler(songs[(currentIndex - 1) % songs.length]);
    }
    if(isPlaying) audioRef.current.play();
  };

  // Add the styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`
  }
  const trackColor = {
    background:`linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
  }

  return (
    <div className="player">
      <div className="time__control">
        <p>{getTime(songInfo.currentTime)}</p>
        <div style={trackColor} className="track">
          <input
            min={0}
            max={songInfo.duration || 0 }
            value={songInfo.currentTime}
            onChange={dragHandler}
            type="range"
          />
          <div style={trackAnim} className="animate__track"></div>
        </div>
        <p>{songInfo.duration ? getTime(songInfo.duration) : '0:00'}</p>
      </div>
      <div className="play_control">
        <FontAwesomeIcon 
        onClick={() => skipTrackHandler('skip_back')} 
        className="skip_play" 
        size="2x" 
        icon={faAngleLeft} />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          size="2x"
          icon={isPlaying ? faPause : faPlay }
        />
        <FontAwesomeIcon
          onClick={() => skipTrackHandler('skip_forward')} 
          className="skip_forward"
          size="2x"
          icon={faAngleRight}
        />
      </div>
    
    </div>
  );
};

export default Player;
