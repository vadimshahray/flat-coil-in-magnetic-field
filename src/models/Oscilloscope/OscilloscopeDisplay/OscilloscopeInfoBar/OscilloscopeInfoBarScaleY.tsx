import { store } from 'src/store'
import React, { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { selectOscilloscopeScaleY } from '@selectors'
import FiraCode from 'src/assets/fonts/firacode_light.woff'

export const OscilloscopeInfoBarScaleY = (
  props: JSX.IntrinsicElements['group'],
) => {
  const ref = useRef<Text & { text: string }>()

  useFrame(() => {
    if (!ref.current) return

    ref.current.text = `${selectOscilloscopeScaleY(store.getState()).toFixed(
      2,
    )} В / ДЕЛ.`
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
        УСИЛ.
      </Text>

      <Text
        ref={ref}
        renderOrder={-1}
        anchorX={-2.5}
        fontSize={3}
        color={'red'}
        font={FiraCode}
      >
        {''}
      </Text>
    </group>
  )
}
