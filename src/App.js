import React, { useState } from 'react';
import './App.css';
import YoutubePlayer from './YoutubePlayer/YoutubePlayer';
import Player from './Player/Player';
let playListUrl = 'PL2XWxTnmRDSUDktBFwRfBBJoAStvQi_I7';

function App() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [playerNode, setPlayerNode] = useState();

  const handlePlay = () => {
    playerNode.playVideo();
  };

  const handlePause = () => {
    playerNode.pauseVideo();
  };

  const handlePlayNext = () => {
    playerNode.nextVideo();
  };

  const handlePlayPrevious = () => {
    playerNode.previousVideo();
  };

  if (isPlayerReady) {
    playerNode.setShuffle(true);
  }

  console.log('isPlayerReady', isPlayerReady);
  return (
    <div className='App'>
      <YoutubePlayer
        playerNode={playerNode}
        setPlayerNode={setPlayerNode}
        setIsPlayerReady={setIsPlayerReady}
        playerListId={playListUrl}
      />
      {isPlayerReady && (
        <Player
          handlePlay={handlePlay}
          handlePause={handlePause}
          handlePlayNext={handlePlayNext}
          handlePlayPrevious={handlePlayPrevious}
        />
      )}
    </div>
  );
}

export default App;
