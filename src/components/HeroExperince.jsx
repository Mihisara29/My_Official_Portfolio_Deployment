import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import React from 'react'
import { HeroBoy } from '../models/Boy_hero'

const HeroExperince = () => {
  return (
    <Canvas>
       <ambientLight />
       <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ffff"}/>
       <directionalLight position={[2, 0, 3]} intensity={3} color={"#1c34ff"}/>

      <Sparkles count={100} size={2} speed={0.5} scale={[10,10,2]}/>

      <group>
        <HeroBoy scale={9} position={[0,-15,0]}/>
      </group>

    </Canvas>
  )
}

export default HeroExperince