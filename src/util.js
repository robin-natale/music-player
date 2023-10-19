export const playAudio = (isPlaying, audioRef) => {
     // check if song is playing
     if(isPlaying){
        const playPromise = audioRef.current.play();
        // add promise to wait for song to load before to play
        if (playPromise !== undefined){
          playPromise.then((audio) =>{
            audioRef.current.play();
          });
        }
      }
}