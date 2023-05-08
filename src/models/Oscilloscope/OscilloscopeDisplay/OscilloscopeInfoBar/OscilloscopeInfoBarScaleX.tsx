import { store } from 'src/store'
import React, { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { selectOscilloscopeScaleX } from '@selectors'
import FiraCode from 'src/assets/fonts/firacode_light.woff'

export const OscilloscopeInfoBarScaleX = (
  props: JSX.IntrinsicElements['group'],
) => {
  const ref = useRef<Text & { text: string }>()

  useFrame(() => {
    if (!ref.current) return

    ref.current.text = `${selectOscilloscopeScaleX(store.getState()).toFixed(
      2,
    )} мс / ДЕЛ.`
  })

  return (
    <group {...props}>
      {/* <mesh position={[barWidth / 2, height / 2 - 2.6, 0]}>
        <boxGeometry args={[barWidth, 5, 1]} />

        <meshStandardMaterial color='red' />
      </mesh> */}

      <Text
        renderOrder={-1}
        anchorX={15}
        fontSize={3}
        color={'red'}
        font={FiraCode}
      >
        ДЛИТ.
      </Text>

      <Text
        ref={ref}
        renderOrder={-1}
        anchorX={-0.75}
        fontSize={3}
        color={'red'}
        font={FiraCode}
      >
        {''}
      </Text>
    </group>
  )
}
