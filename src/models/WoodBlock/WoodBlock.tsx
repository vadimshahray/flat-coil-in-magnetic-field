import React from 'react'
import AOTexture from './textures/ao.jpg'
import { useTexture } from '@react-three/drei'
import ColorTexture from './textures/color.jpg'
import HeightTexture from './textures/height.jpg'
import NormalTexture from './textures/normal.jpg'
import RoughnessTexture from './textures/roughness.jpg'

type Props = {
  args: JSX.IntrinsicElements['boxGeometry']['args']
} & Omit<JSX.IntrinsicElements['mesh'], 'args'>

const WoodBlock = ({ args, ...props }: Props) => {
  const maps = useTexture({
    aoMap: AOTexture,
    map: ColorTexture,
    normalMap: NormalTexture,
    roughnessMap: RoughnessTexture,
    displacementMap: HeightTexture,
  })

  return (
    <mesh {...props}>
      <boxGeometry args={args} />

      <meshStandardMaterial {...maps} />
    </mesh>
  )
}

export default WoodBlock
