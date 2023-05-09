import { store } from 'src/store'
import React, { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useSelector } from 'react-redux'
import { useFrame } from '@react-three/fiber'
import FiraCode from 'src/assets/fonts/firacode_light.woff'
import {
  selectOscilloscopeScaleX,
  selectOscilloscopeConfigurableParameterI,
} from '@selectors'

export const OscilloscopeInfoBarScaleX = (
  props: JSX.IntrinsicElements['group'],
) => {
  const valueRef = useRef<Text & { text: string; color: string }>()

  const isConfigurable =
    useSelector(selectOscilloscopeConfigurableParameterI) === 1

  useFrame(() => {
    if (!valueRef.current) return

    valueRef.current.text = `${selectOscilloscopeScaleX(
      store.getState(),
    ).toFixed(2)} мс / ДЕЛ.`
  })

  return (
    <group {...props}>
      <mesh position={[-10.4, 0.125, -0.25]} visible={isConfigurable}>
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
        ДЛИТ.
      </Text>

      <Text
        ref={valueRef}
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
