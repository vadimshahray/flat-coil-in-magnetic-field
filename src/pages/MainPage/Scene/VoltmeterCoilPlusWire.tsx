import { Wire } from './Wire'
import * as THREE from 'three'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import React, { useCallback } from 'react'
import { setWireConnection } from '@slices'
import { WireDropZone } from './WireDropZone'
import { DISCONNECTED_WIRE_POINTS } from '@constants'
import { selectVoltmeterCoilPlusWire } from '@selectors'

export const VoltmeterCoilPlusWire = () => {
  const dispatch = useDispatch()

  const connectedWireIndex = useSelector(selectVoltmeterCoilPlusWire)

  const handleWireDrop = useCallback(
    (wireIndex: number) => {
      dispatch(
        setWireConnection({
          wireIndex,
          connectionA: '@VoltmeterPlus',
          connectionB: '@CoilPlus',
        }),
      )
    },
    [dispatch],
  )

  return (
    <group position={new THREE.Vector3(170, -5, -40)}>
      {connectedWireIndex !== -1 && (
        <Wire
          index={connectedWireIndex}
          position={new THREE.Vector3(0, 0, 0)}
          points={DISCONNECTED_WIRE_POINTS}
        />
      )}

      <WireDropZone
        placeholderWire={{
          isVisible: connectedWireIndex === -1,
          points: DISCONNECTED_WIRE_POINTS,
        }}
        dropZone={{
          width: 400,
          height: 100,
          position: new THREE.Vector3(120, -1, 0),
          rotation: new THREE.Euler(Math.PI / 2),
        }}
        onWireDrop={handleWireDrop}
      />
    </group>
  )
}
