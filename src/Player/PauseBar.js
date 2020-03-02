import React, { useRef } from 'react';
import * as THREE from 'three';
import { animated } from 'react-spring-three';

export default props => {
  const mesh = useRef();
  var length = 0.15,
    width = 0.05;

  var shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.lineTo(0, length);
  shape.lineTo(width, length);
  shape.lineTo(width, 0);
  shape.lineTo(0, 0);

  var extrudeSettings = {
    steps: 1,
    depth: 0.05,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.015,
    bevelOffset: 0,
    bevelSegments: 1
  };

  var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);

  return (
    <animated.mesh {...props} ref={mesh} geometry={geometry}>
      <meshPhysicalMaterial attach='material' color={'#DB162F'} />
    </animated.mesh>
  );
};
