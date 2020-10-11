import React, { FC } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from 'components/three/Controls';
import Box from 'components/three/Box';

const HomeTemplate: FC = () => {
  const style = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
  };

  return (
    <div style={style}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <Controls isControl />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default HomeTemplate;
