import * as THREE from 'three'

export const COIL_SCENE_POSITION = new THREE.Vector3(-100, 0, 0)
export const CAMERA_COIL_POSITION = COIL_SCENE_POSITION.clone().add(
  new THREE.Vector3(0, 20, 200),
)

export const VOLTMETER_SCENE_POSITION = new THREE.Vector3(100, 0, 0)
export const CAMERA_VOLTMETER_POSITION = VOLTMETER_SCENE_POSITION.clone().add(
  new THREE.Vector3(100, 20, 200),
)

export const CAMERA_DEFAULT_POSITION = new THREE.Vector3(0, 260, 0)
export const CAMERA_ALL_DEVICES_POSITION = CAMERA_DEFAULT_POSITION.clone().add(
  new THREE.Vector3(0, 170, 370),
)
