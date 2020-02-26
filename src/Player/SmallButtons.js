import React, { useRef } from 'react';
import * as THREE from 'three';
import { useSpring, animated } from 'react-spring-three';

export default props => {
  const { isPlaying, onClick, position } = props;
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  //   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  var x = 0,
    y = 0;
  var shape = new THREE.Shape();
  shape.lineTo(x, y + 0.5);
  shape.lineTo(x + 0.5, y + 0.25);
  shape.lineTo(x, y);

  const prop = useSpring({
    position: isPlaying ? position : [position[0], 0, position[2]]
  });

  var extrudeSettings = {
    steps: 2,
    depth: 0.005,
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
      castShadow
      receiveShadow
      geometry={geometry}
      {...prop}
    >
      <meshPhysicalMaterial attach='material' color={'#DB162F'} />
    </animated.mesh>
  );
};
