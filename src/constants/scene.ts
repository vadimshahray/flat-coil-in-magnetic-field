import * as THREE from 'three'

const TABLE_TOP = 524

export const CAMERA_DEFAULT_POSITION = new THREE.Vector3(0, TABLE_TOP, 0)
export const CAMERA_ALL_DEVICES_POSITION = CAMERA_DEFAULT_POSITION.clone().add(
  new THREE.Vector3(0, 400, 0),
)
export const CAMERA_SCHEME_ASSEMBLY_POSITION =
  CAMERA_DEFAULT_POSITION.clone().add(new THREE.Vector3(0, 700, 0))

export const ENGINE_SCENE_POSITION = new THREE.Vector3(400, TABLE_TOP, -80)
export const CAMERA_ENGINE_POSITION = ENGINE_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const COIL_SCENE_POSITION = new THREE.Vector3(0, TABLE_TOP, -80)
export const CAMERA_COIL_POSITION = COIL_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const VOLTMETER_SCENE_POSITION = new THREE.Vector3(340, TABLE_TOP, 140)
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
  -330,
  TABLE_TOP,
  100,
)
export const CAMERA_CURRENT_SOURCE_POSITION =
  CURRENT_SOURCE_SCENE_POSITION.clone().add(
    new THREE.Vector3(0, TABLE_TOP, 120),
  )

export const WIRE_HEAP_POSITION = new THREE.Vector3(230, TABLE_TOP + 2, 200)
