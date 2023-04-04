import React from 'react'
import { useDispatch } from '@hooks'
import { Button } from '@mui/material'
import { assemblyScheme } from '@slices'
import { useTranslate } from '@languages'
import { useSelector } from 'react-redux'
import { selectSchemeStatus } from '@selectors'

export const AssembleSchemeButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('AssembleSchemeButton')

  const isSchemeAssembled = useSelector(selectSchemeStatus) === 'assembled'

  const handleClick = () => {
    dispatch(assemblyScheme())
  }

  return !isSchemeAssembled ? (
    <Button onClick={handleClick}>{translate('assembleScheme')}</Button>
  ) : null
}
