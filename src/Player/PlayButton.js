import React, { useRef } from 'react';
import * as THREE from 'three';
import { useSpring, animated } from 'react-spring-three';

export default props => {
  const { isPlaying, onClick, position } = props;
  const mesh = useRef();

  var x = 0,
    y = 0;
  var shape = new THREE.Shape();
  shape.lineTo(x, y + 0.5);
  shape.lineTo(x + 0.5, y + 0.25);
  shape.lineTo(x, y);

  const prop = useSpring({
    position: isPlaying
      ? [position[0], position[1], position[2] - 0.125]
      : position
  });

  var extrudeSettings = {
    steps: 2,
    depth: 0.125,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.1,
    bevelOffset: 0,
    bevelSegments: 1
  };

  var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);

  return (
    <animated.mesh
      {...props}
      onClick={onClick}
      ref={mesh}
      geometry={geometry}
      {...prop}
    >
      <meshPhysicalMaterial attach='material' color={'#DB162F'} />
    </animated.mesh>
  );
};
