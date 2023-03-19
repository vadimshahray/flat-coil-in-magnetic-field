import React from 'react'
import { useTranslate } from '@languages'
import { IconButton, Tooltip } from '@mui/material'
import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'

type Props = {
  inView: boolean
  onClick: () => void
}

export const ViewDeviceButton = ({ inView, onClick }: Props) => {
  const translate = useTranslate('ViewDeviceButton')

  return (
    <Tooltip title={translate(inView ? 'doNotViewDevice' : 'viewDevice')}>
      <IconButton onClick={onClick}>
        {inView ? <VisibilityOffOutlined /> : <VisibilityOutlined />}
      </IconButton>
    </Tooltip>
  )
}
