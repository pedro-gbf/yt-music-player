import React, { useRef, useState } from 'react';
import { Canvas } from 'react-three-fiber';
import * as THREE from 'three';
import Light from './Light';
import PlayButton from './PlayButton';
import SmallButtons from './SmallButtons';
import Background from './Background';
import PauseBar from './PauseBar';

const Main = props => {
  const { handlePlay, handlePause, handlePlayNext, handlePlayPrevious } = props;
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonOnClick = () => {
    if (isPlaying) {
      setTimeout(handlePause, 100);
    } else {
      setTimeout(handlePlay, 100);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Canvas camera={{ position: [0, 0, 2] }} shadowMap={THREE.PCFSoftShadowMap}>
      <Light />
      <ambientLight color={0x404040} intensity={1} />
      {/* Play Button */}
      <PlayButton
        position={[-0.25, -0.25, 0]}
        isPlaying={isPlaying}
        onClick={handlePlayButtonOnClick}
        scale={[1, 1, 1]}
      />
      {/* Bot Triangle */}
      <SmallButtons
        position={[-0.3, -0.55, 0]}
        scale={[0.25, 0.25, 1]}
        onClick={handlePlayNext}
        isPlaying={isPlaying}
      />
      {/* Top Triangle */}
      <SmallButtons
        reversed
        position={[-0.15, 0.55, 0]}
        scale={[0.25, 0.25, 1]}
        rotation={new THREE.Euler(0, 0, Math.PI)}
        onClick={handlePlayPrevious}
        isPlaying={isPlaying}
      />
      <PauseBar position={[-0.125, 0, 0.03]} />
      <PauseBar position={[-0.025, 0, 0.03]} />
      <Background position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Main;
