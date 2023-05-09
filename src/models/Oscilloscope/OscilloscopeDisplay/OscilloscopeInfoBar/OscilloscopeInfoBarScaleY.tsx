import { store } from 'src/store'
import React, { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useSelector } from 'react-redux'
import { useFrame } from '@react-three/fiber'
import FiraCode from 'src/assets/fonts/firacode_light.woff'
import {
  selectOscilloscopeScaleY,
  selectOscilloscopeConfigurableParameterI,
} from '@selectors'

export const OscilloscopeInfoBarScaleY = (
  props: JSX.IntrinsicElements['group'],
) => {
  const ref = useRef<Text & { text: string }>()

  const isConfigurable =
    useSelector(selectOscilloscopeConfigurableParameterI) === 0

  useFrame(() => {
    if (!ref.current) return

    ref.current.text = `${selectOscilloscopeScaleY(store.getState()).toFixed(
      2,
    )} В / ДЕЛ.`
  })

  return (
    <group {...props}>
      <mesh position={[-10.4, 0.4, -0.25]} visible={isConfigurable}>
        <boxGeometry args={[10, 4.6, 0.1]} />

        <meshStandardMaterial color='red' />
      </mesh>

      <Text
        renderOrder={-1}
        anchorX={15}
        fontSize={3}
        color={isConfigurable ? '#2C090A' : 'red'}
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
