// FIXME: Mobile screen view
// TODO: P2 - Add accessibility
// TODO: P2 - Add multiple libraries
// TODO: P2 - Add darkmode with transition
import React, { useRef, useState } from "react";

// Import Styles
import "./styles/app.scss";

// Adding components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import Nav from "./components/Nav";

// Import Util
import data from "./data";

function App() {
  // State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);
  const [darkModeStatus, setDarkModeStatus] = useState(false);

  // Ref
  const audioRef = useRef(null);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    // Calculate percentage
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animation = Math.round( (roundedCurrent / roundedDuration ) * 100 )
    setSongInfo({ ...songInfo, currentTime: current, duration: duration, animationPercentage: animation });
  };

  const songEndHandler = async () =>{
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    await  setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    if(isPlaying) {
      setTimeout(() => {
        audioRef.current.play();
      }, 100);
    }
  };

  // console.log('dark:' + setLibraryStatus);
  return (
    <div className={`app${darkModeStatus ? ' dark__mode' : ''}${libraryStatus ? ' library__open' : ''}`}>
      <Nav 
      libraryStatus={libraryStatus} 
      setLibraryStatus={setLibraryStatus} 
      darkModeStatus={darkModeStatus} 
      setDarkModeStatus={setDarkModeStatus} />
      <Song 
      currentSong={currentSong} />
      <Player
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
        setSongs= {setSongs}
      />
      <Library
        isPlaying={isPlaying}
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        setSongs={setSongs}
        setLibraryStatus={setLibraryStatus} 
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
}

export default App;
