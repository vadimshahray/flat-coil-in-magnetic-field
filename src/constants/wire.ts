import * as THREE from 'three'

export const WIRES_LENGTH = 0.2
export const WIRES_SECTION = 0.5 * 10 ** -6
export const WIRES_RESISTIVITY = 2.8 * 10 ** -8
export const WIRES_MATERIAL = 'Al'

export const DISCONNECTED_WIRE_POINTS = [
  new THREE.Vector3(0, 0, 0),
  new THREE.Vector3(30, 0, 3),
  new THREE.Vector3(120, 0, -2),
  new THREE.Vector3(160, 0, 3),
  new THREE.Vector3(260, 0, 0),
]
