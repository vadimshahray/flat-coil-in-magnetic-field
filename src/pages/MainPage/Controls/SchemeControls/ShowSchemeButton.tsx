import React from 'react'
import { useTranslate } from '@languages'
import { IconButton, Tooltip } from '@mui/material'
import { OfflineBoltOutlined } from '@mui/icons-material'

export const ShowSchemeButton = () => {
  const translate = useTranslate('ShowSchemeButton')

  return (
    <Tooltip title={translate('showScheme')}>
      <IconButton color='primary'>
        <OfflineBoltOutlined />
      </IconButton>
    </Tooltip>
  )
}
