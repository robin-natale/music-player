import React, {useRef} from "react";
// Import the font awesome package
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import specific icons
import { faPlay, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong }) => {

  // Ref
  const audioRef = useRef(null);

  // Event handlers
  const playSongHandler = () => {
    console.log(audioRef.current);
  }

  return (
    <div className="player">
      <div className="time-control">
        <p>Start Time</p>
        <input type="range" />
        <p>End Time</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon className="skip-play" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon onClick={playSongHandler} className="play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>
      <audio ref={audioRef} src={currentSong.audion}></audio>
    </div>
  );
};

export default Player;
