import React from 'react';
import * as THREE from 'three';

export default () => {
  //Create a PointLight and turn on shadows for the light
  const light = new THREE.DirectionalLight(0xffffff, 1, 100);
  light.position.set(10, 10, 10);
  light.castShadow = true; // default false
  //Set up shadow properties for the light
  light.shadow.mapSize.width = 10000; // default
  light.shadow.mapSize.height = 10000; // default
  light.shadow.camera.near = 1; // default
  light.shadow.camera.far = 500; // default
  light.shadow.camera.top = -2; // default
  light.shadow.camera.right = 2; // default
  light.shadow.camera.left = -2; // default
  light.shadow.camera.bottom = 2; // default
  return <primitive object={light} />;
};
