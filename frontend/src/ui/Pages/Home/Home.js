import React from 'react';
import { Canvas } from '@react-three/fiber';
import { AddStars } from './Stars';

export function Home() {
  return (
    <section className='page'>
      <Canvas>
        <ambientLight intensity={0.1} />
        <orthographicCamera args={[0, 0, 0, 0, 0, 1000]} />
        <AddStars />
      </Canvas>
    </section>
  );
}
