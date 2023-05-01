import * as THREE from 'three'

export const TABLE_TOP = 524

export const CAMERA_DEFAULT_POSITION = new THREE.Vector3(0, TABLE_TOP, 0)
export const CAMERA_ALL_DEVICES_POSITION = CAMERA_DEFAULT_POSITION.clone().add(
  new THREE.Vector3(0, 430, 540),
)

export const ENGINE_SCENE_POSITION = new THREE.Vector3(400, TABLE_TOP, -74)
export const CAMERA_ENGINE_POSITION = ENGINE_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const COIL_SCENE_POSITION = new THREE.Vector3(0, TABLE_TOP, -80)
export const CAMERA_COIL_POSITION = COIL_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const VOLTMETER_SCENE_POSITION = new THREE.Vector3(240, TABLE_TOP, 190)
export const CAMERA_VOLTMETER_POSITION = VOLTMETER_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const HELMHOLTZ_COILS_SCENE_POSITION = new THREE.Vector3(
  0,
  TABLE_TOP,
  -80,
)
export const CAMERA_HELMHOLTZ_COILS_POSITION =
  HELMHOLTZ_COILS_SCENE_POSITION.clone().add(new THREE.Vector3(0, 60, 220))

export const CURRENT_SOURCE_SCENE_POSITION = new THREE.Vector3(
  -420,
  TABLE_TOP + 34,
  -60,
)
export const CAMERA_CURRENT_SOURCE_POSITION =
  CURRENT_SOURCE_SCENE_POSITION.clone().add(
    new THREE.Vector3(0, TABLE_TOP, 120),
  )

export const OSCILLOSCOPE_SCENE_POSITION = new THREE.Vector3(
  -421,
  TABLE_TOP + 67,
  -60,
)
export const CAMERA_OSCILLOSCOPE_POSITION =
  VOLTMETER_SCENE_POSITION.clone().add(new THREE.Vector3(0, 20, 120))

export const WIRE_HEAP_POSITION = new THREE.Vector3(330, TABLE_TOP + 2, 200)
