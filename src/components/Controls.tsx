import React, { useRef } from 'react';
import { ReactThreeFiber, extend, useThree, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

// Ref. https://qiita.com/Quarter-lab/items/151f06bddea1fc9cf4d7
// インターフェイスIntrinsicElementsにorbitControls の定義を追加
declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Node<OrbitControls, typeof OrbitControls>;
    }
  }
}

type ControlProps = {
  isControl: boolean;
};

const Controls: React.FC<ControlProps> = ({ isControl }) => {
  const controlsRef = useRef<OrbitControls>();
  const { camera, gl } = useThree();

  useFrame(() => controlsRef.current?.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enabled={isControl}
      enableZoom
      zoomSpeed={1.0}
      enableRotate
      rotateSpeed={1.0}
      enablePan
      panSpeed={2.0}
      minDistance={0}
      maxDistance={Infinity}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
    />
  );
};

export default Controls;
