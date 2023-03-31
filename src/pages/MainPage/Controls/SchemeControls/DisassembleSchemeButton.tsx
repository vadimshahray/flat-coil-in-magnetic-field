import React from 'react'
import { Button } from '@mui/material'
import { useTranslate } from '@languages'
import { CloseOutlined } from '@mui/icons-material'

export const DisassembleSchemeButton = () => {
  const translate = useTranslate('DisassembleSchemeButton')

  return (
    <Button startIcon={<CloseOutlined />}>
      {translate('disassembleScheme')}
    </Button>
  )
}
