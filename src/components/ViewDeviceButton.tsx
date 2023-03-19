import React from 'react'
import { useTranslate } from '@languages'
import { IconButton, Tooltip } from '@mui/material'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'

type Props = {
  inView: boolean
  onClick: () => void
}

export const ViewDeviceButton = ({ inView: isActive, onClick }: Props) => {
  const translate = useTranslate('ViewDeviceButton')

  return (
    <Tooltip title={translate('viewDevice')}>
      <IconButton onClick={onClick}>
        {isActive ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
      </IconButton>
    </Tooltip>
  )
}
