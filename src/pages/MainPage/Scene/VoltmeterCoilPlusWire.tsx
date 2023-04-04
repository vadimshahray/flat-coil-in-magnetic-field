import { Wire } from './Wire'
import * as THREE from 'three'
import { useDispatch } from '@hooks'
import { connectWire } from '@slices'
import { useSelector } from 'react-redux'
import React, { useCallback } from 'react'
import { WireDropZone } from './WireDropZone'
import { selectSchemeWireByConnection } from '@selectors'
import { DISCONNECTED_WIRE_POINTS, SCHEME_CONNECTIONS } from '@constants'

const connection = SCHEME_CONNECTIONS['Coil+Voltmeter+']

export const VoltmeterCoilPlusWire = () => {
  const dispatch = useDispatch()

  const connectedWire = useSelector(selectSchemeWireByConnection(connection))

  const handleWireDrop = useCallback(
    (id: number) => {
      dispatch(
        connectWire({
          id,
          ...connection,
        }),
      )
    },
    [dispatch],
  )

  return (
    <group position={new THREE.Vector3(170, -5, -40)}>
      {connectedWire && (
        <Wire
          id={connectedWire.id}
          position={new THREE.Vector3(0, 0, 0)}
          points={DISCONNECTED_WIRE_POINTS}
        />
      )}

      <WireDropZone
        placeholderWire={{
          isVisible: connectedWire === null,
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
