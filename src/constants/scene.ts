import * as THREE from 'three'

export const CAMERA_DEFAULT_POSITION = new THREE.Vector3(0, 0, 0)
export const CAMERA_ALL_DEVICES_POSITION = CAMERA_DEFAULT_POSITION.clone().add(
  new THREE.Vector3(0, 230, 500),
)

export const COIL_SCENE_POSITION = new THREE.Vector3(0, 44, -110)
export const CAMERA_COIL_POSITION = COIL_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const VOLTMETER_SCENE_POSITION = new THREE.Vector3(170, 19, 40)
export const CAMERA_VOLTMETER_POSITION = VOLTMETER_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 120),
)

export const HELMHOLTZ_COILS_SCENE_POSITION = new THREE.Vector3(-240, 90, 70)
export const CAMERA_HELMHOLTZ_COILS_POSITION =
  HELMHOLTZ_COILS_SCENE_POSITION.clone().add(new THREE.Vector3(0, 60, 220))
