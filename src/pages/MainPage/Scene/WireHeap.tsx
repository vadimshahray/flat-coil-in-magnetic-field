import { Wire } from './Wire'
import * as THREE from 'three'
import { useDispatch } from '@hooks'
import { selectWires } from '@selectors'
import { useSelector } from 'react-redux'
import { setWireConnection } from '@slices'
import { WireDropZone } from './WireDropZone'
import React, { useCallback, useMemo } from 'react'
import { DISCONNECTED_WIRE_POINTS } from '@constants'

export const WireHeap = () => {
  const dispatch = useDispatch()
  const wires = useSelector(selectWires)

  const wirePositions = useMemo(
    () => wires.map((_, i) => new THREE.Vector3(0, 0, 10 * i)),
    [wires],
  )

  const handleWireDrop = useCallback(
    (wireIndex: number) => {
      dispatch(
        setWireConnection({
          wireIndex,
          connectionA: null,
          connectionB: null,
        }),
      )
    },
    [dispatch],
  )

  return (
    <group position={[230, -5, 200]}>
      {wires.map((w, i) =>
        !w.connectionA && !w.connectionB ? (
          <Wire
            key={i}
            index={i}
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
