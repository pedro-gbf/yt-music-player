import React from 'react';
import * as THREE from 'three';

export default () => {
  //Create a PointLight and turn on shadows for the light
  const light = new THREE.DirectionalLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  return <primitive object={light} />;
};
