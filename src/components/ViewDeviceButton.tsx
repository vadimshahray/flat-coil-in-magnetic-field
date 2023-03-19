import React from 'react'
import { useTranslate } from '@languages'
import { IconButton, Tooltip } from '@mui/material'
import { VisibilityOutlined } from '@mui/icons-material'

type Props = {
  onClick: () => void
}

export const ViewDeviceButton = ({ onClick }: Props) => {
  const translate = useTranslate('ViewDeviceButton')

  return (
    <Tooltip title={translate('viewDevice')}>
      <IconButton onClick={onClick}>
        <VisibilityOutlined />
      </IconButton>
    </Tooltip>
  )
}
