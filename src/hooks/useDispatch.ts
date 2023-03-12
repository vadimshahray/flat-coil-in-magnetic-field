import { useDispatch as reduxUseDispatch } from 'react-redux'

export const useDispatch = () => {
  return reduxUseDispatch<AppDispatch>()
}
