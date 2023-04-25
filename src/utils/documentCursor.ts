import RotationIcon from 'src/assets/rotation.svg'

export const setPointerCursor = () => {
  document.body.style.cursor = 'pointer'
}

export const setRotationCursor = () => {
  document.body.style.cursor = `url(${RotationIcon}), pointer`
}

export const setDefaultCursor = () => {
  document.body.style.cursor = 'default'
}
