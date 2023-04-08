import { Wire } from './Wire'
import * as THREE from 'three'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectSchemeWires } from '@selectors'
import { DISCONNECTED_WIRE_POINTS } from '@constants'

export const WireHeap = () => {
  const wires = useSelector(selectSchemeWires)

  const wirePositions = useMemo(
    () => wires.map((_, i) => new THREE.Vector3(0, 0, 10 * i)),
    [wires],
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
    </group>
  )
}
