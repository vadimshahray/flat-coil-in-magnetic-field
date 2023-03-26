import * as THREE from 'three'

export const CAMERA_DEFAULT_POSITION = new THREE.Vector3(0, 260, 0)
export const CAMERA_ALL_DEVICES_POSITION = CAMERA_DEFAULT_POSITION.clone().add(
  new THREE.Vector3(0, 170, 370),
)

export const COIL_SCENE_POSITION = new THREE.Vector3(-40, 309, -120)
export const CAMERA_COIL_POSITION = COIL_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const VOLTMETER_SCENE_POSITION = new THREE.Vector3(80, 286, 0)
export const CAMERA_VOLTMETER_POSITION = VOLTMETER_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const HELMHOLTZ_COILS_SCENE_POSITION = new THREE.Vector3(-140, 356, 70)
export const CAMERA_HELMHOLTZ_COILS_POSITION =
  HELMHOLTZ_COILS_SCENE_POSITION.clone().add(new THREE.Vector3(0, 20, 120))
