import React from 'react'
import { Image } from '@react-three/drei'
import WindowBackgroundPath from 'src/assets/window_background_right.jpg'

const Window = React.lazy(() => import('src/models/Window'))

export const RightWindow = (props: JSX.IntrinsicElements['group']) => {
  return (
    <group {...props} dispose={null}>
      <Window />

      <Image
        position={[0, 540, -20]}
        url={WindowBackgroundPath}
        scale={[1360, 1024]}
      />
    </group>
  )
}
