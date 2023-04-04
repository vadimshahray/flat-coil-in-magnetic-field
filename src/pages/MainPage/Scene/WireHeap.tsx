import { Wire } from './Wire'
import * as THREE from 'three'
import { useDispatch } from '@hooks'
import { disconnectWire } from '@slices'
import { useSelector } from 'react-redux'
import { WireDropZone } from './WireDropZone'
import { selectSchemeWires } from '@selectors'
import React, { useCallback, useMemo } from 'react'
import { DISCONNECTED_WIRE_POINTS } from '@constants'

export const WireHeap = () => {
  const dispatch = useDispatch()
  const wires = useSelector(selectSchemeWires)

  const wirePositions = useMemo(
    () => wires.map((_, i) => new THREE.Vector3(0, 0, 10 * i)),
    [wires],
  )

  const handleWireDrop = useCallback(
    (wireId: number) => {
      dispatch(disconnectWire(wireId))
    },
    [dispatch],
  )

  return (
    <group position={[230, -5, 200]}>
      {wires.map((w, i) =>
        !w.terminal1 && !w.terminal2 ? (
          <Wire
            key={w.id}
            id={w.id}
            points={DISCONNECTED_WIRE_POINTS}
            position={wirePositions[i]}
          />
        ) : null,
      )}

      <WireDropZone
        placeholderWire={{
          isVisible: false,
          points: DISCONNECTED_WIRE_POINTS,
        }}
        dropZone={{
          width: 400,
          height: 140,
          position: new THREE.Vector3(130, -1, 15),
          rotation: new THREE.Euler(Math.PI / 2),
        }}
        onWireDrop={handleWireDrop}
      />
    </group>
  )
}
