import * as THREE from 'three'

export const TABLE_TOP = 524

export const CAMERA_DEFAULT_POSITION = new THREE.Vector3(0, TABLE_TOP, 0)
export const CAMERA_ALL_DEVICES_POSITION = CAMERA_DEFAULT_POSITION.clone().add(
  new THREE.Vector3(0, 430, 540),
)

export const ENGINE_SCENE_POSITION = new THREE.Vector3(
  400,
  TABLE_TOP + 210,
  -10,
)
export const CAMERA_ENGINE_POSITION = ENGINE_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 5, 280),
)

export const COIL_SCENE_POSITION = new THREE.Vector3(0, TABLE_TOP + 160, -16)
export const CAMERA_COIL_POSITION = COIL_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 30, 170),
)

export const VOLTMETER_SCENE_POSITION = new THREE.Vector3(240, TABLE_TOP, 200)
export const CAMERA_VOLTMETER_POSITION = VOLTMETER_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 30, 130),
)

export const HELMHOLTZ_COILS_SCENE_POSITION = new THREE.Vector3(
  0,
  TABLE_TOP,
  -16,
)
export const CAMERA_HELMHOLTZ_COILS_POSITION =
  HELMHOLTZ_COILS_SCENE_POSITION.clone().add(new THREE.Vector3(0, 200, 360))

export const CURRENT_SOURCE_SCENE_POSITION = new THREE.Vector3(
  -420,
  TABLE_TOP + 34,
  -21,
)
export const CAMERA_CURRENT_SOURCE_POSITION =
  CURRENT_SOURCE_SCENE_POSITION.clone().add(new THREE.Vector3(0, 20, 210))

export const OSCILLOSCOPE_SCENE_POSITION = new THREE.Vector3(
  -420.5,
  TABLE_TOP + 67 + 110,
  4.5,
)
export const CAMERA_OSCILLOSCOPE_POSITION =
  OSCILLOSCOPE_SCENE_POSITION.clone().add(new THREE.Vector3(0, 0, 170))

export const WIRE_HEAP_POSITION = new THREE.Vector3(430, TABLE_TOP + 2, 220)
