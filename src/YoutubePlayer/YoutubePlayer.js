import React, { useEffect } from 'react';
import './YoutubePlayer.css';
import { useLocation } from 'react-router-dom';

// Youtube Statuses
// YT.PlayerState.ENDED 1
// YT.PlayerState.PLAYING 2
// YT.PlayerState.PAUSED 3
// YT.PlayerState.BUFFERING 4
// YT.PlayerState.CUED 5

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const YoutubeWrapper = ({ setPlayerNode, setIsPlayerReady, playerListId }) => {
  let lastData;
  let query = useQuery();

  useEffect(() => {
    const loadVideo = () => {
      setPlayerNode(
        new window.YT.Player('ytPlayer', {
          playerVars: { autoplay: 0, controls: 0, fs: 0 },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
          }
        })
      );
    };

    const onPlayerStateChange = event => {
      switch (event.data) {
        // If it buffers and then returns to unstarted status
        case -1:
        case 1:
          if (lastData === 3) setIsPlayerReady(true);
          break;
        default:
          break;
      }

      lastData = event.data;
    };

    const onPlayerReady = event => {
      const queryPlaylist = query.get('p');
      const playListToPlay = queryPlaylist ? queryPlaylist : playerListId;
      console.log('playListToPlay', playListToPlay);
      event.target.loadPlaylist({
        enablejsapi: 1,
        listType: 'playlist',
        list: playListToPlay,
        suggestedQuality: 'hd720',
        autoplay: 0
      });
    };

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    // onYouTubeIframeAPIReady will load the video after the script is loaded
    window.onYouTubeIframeAPIReady = loadVideo;

    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }, []);

  return <div isHidden id='ytPlayer' />;
};

export default YoutubeWrapper;
