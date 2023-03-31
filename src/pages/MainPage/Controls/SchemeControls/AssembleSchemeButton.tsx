import React from 'react'
import { Button } from '@mui/material'
import { useTranslate } from '@languages'

export const AssembleSchemeButton = () => {
  const translate = useTranslate('AssembleSchemeButton')

  return <Button>{translate('assembleScheme')}</Button>
}
