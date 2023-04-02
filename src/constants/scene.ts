import * as THREE from 'three'

export const CAMERA_DEFAULT_POSITION = new THREE.Vector3(0, 0, 0)
export const CAMERA_ALL_DEVICES_POSITION = CAMERA_DEFAULT_POSITION.clone().add(
  new THREE.Vector3(0, 230, 500),
)
export const CAMERA_SCHEME_ASSEMBLY_POSITION =
  CAMERA_DEFAULT_POSITION.clone().add(new THREE.Vector3(0, 700, 0))

export const ENGINE_SCENE_POSITION = new THREE.Vector3(400, 0, -80)
export const CAMERA_ENGINE_POSITION = ENGINE_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const COIL_SCENE_POSITION = new THREE.Vector3(0, 44, -80)
export const CAMERA_COIL_POSITION = COIL_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const VOLTMETER_SCENE_POSITION = new THREE.Vector3(340, 19, 140)
export const CAMERA_VOLTMETER_POSITION = VOLTMETER_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const HELMHOLTZ_COILS_SCENE_POSITION = new THREE.Vector3(0, 185, -80)
export const CAMERA_HELMHOLTZ_COILS_POSITION =
  HELMHOLTZ_COILS_SCENE_POSITION.clone().add(new THREE.Vector3(0, 60, 220))

export const AMPERAGE_GENERATOR_SCENE_POSITION = new THREE.Vector3(
  -470,
  30,
  200,
)
export const CAMERA_AMPERAGE_GENERATOR_POSITION =
  AMPERAGE_GENERATOR_SCENE_POSITION.clone().add(new THREE.Vector3(0, 20, 120))
