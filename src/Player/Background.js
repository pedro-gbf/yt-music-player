import React, { useRef } from 'react';

export default props => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh} receiveShadow>
      <planeBufferGeometry attach='geometry' args={[200, 200, 0, 0]} />
      <meshStandardMaterial attach='material' color={'#D6A99A'} />
    </mesh>
  );
};
