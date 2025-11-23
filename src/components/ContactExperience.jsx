import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Text3D } from '@react-three/drei'
import { ContactBoy } from '../models/Boy'

const ContactExperience = () => {
  return (
    <Canvas
      camera={{
        position:[0, 0, 5],
      }} className='py-10'
    >
      <ambientLight intensity={2} />
      <directionalLight position={[-5, 5, 5]} intensity={6} color={"#ffff"}/>

      <group>
        <Text3D
        position={[-4.5, -1.2, -3.5]} 
        curveSegments={32}
        bevelEnabled
        bevelSize={0.04}
        bevelThickness={0.1}
        height={0.5}
        lineHeight={0.5}
        letterSpacing={-0.06}
        size={3}
        font={"/fonts/Inter_Bold.json"}>
          {`hello`}
          <meshNormalMaterial />
        </Text3D>
        <ContactBoy scale={1.345} position={[0, -1.2, -2]}/>
      </group>
    </Canvas>
  )
}

export default ContactExperience