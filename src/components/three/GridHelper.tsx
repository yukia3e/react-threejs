import React, { FC } from 'react';

type Props = {
  size?: number;
  divisions?: number;
};

const GridHelper: FC<Props> = ({ size, divisions }) => {
  return (
    <mesh>
      <gridHelper args={[size, divisions, 'blue', 'hotpink']} />
    </mesh>
  );
};

export default GridHelper;
