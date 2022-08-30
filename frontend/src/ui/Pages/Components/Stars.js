import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

function Star(props) {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.z -= 0.05));

  return (
    <mesh {...props} ref={ref} scale={0.25}>
      <torusGeometry args={[0.15, 0.5, 5, 20, 50]} />
      <meshStandardMaterial color={0x00000} />
    </mesh>
  );
}

export function AddStars() {
  const [x] = Array(1)
    .fill()
    .map(() => MathUtils.randFloatSpread(4));

  return (
    <>
      {[...Array(200)].map((_, i) => (
        <Star position={[x, 0, 0]} key={i} />
      ))}{' '}
    </>
  );
}
