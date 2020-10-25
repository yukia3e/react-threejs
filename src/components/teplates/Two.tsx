import React, { FC } from 'react';
import { Canvas } from 'react-three-fiber';
import Controls from 'components/three/Controls';
import Box from 'components/three/Box';
import GridHelper from 'components/three/GridHelper';

const TwoTemplate: FC = () => {
  const style = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#000',
  };

  return (
    <div style={style}>
      <Canvas>
        <Controls isControl />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <GridHelper size={4} divisions={4} />
      </Canvas>
    </div>
  );
};

export default TwoTemplate;
