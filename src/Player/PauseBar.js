import React from 'react';

export default props => {
  return (
    <mesh {...props} scale={[1, 1, 1]} castShadow>
      <boxBufferGeometry
        attach='geometry'
        color={'#DB162F'}
        args={[0.05, 0.15, 0.1]}
      />
      <meshPhysicalMaterial attach='material' color={'#D6A99A'} />
    </mesh>
  );
};
