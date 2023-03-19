import React from 'react'
import { useDispatch } from '@hooks'
import { useTranslate } from '@languages'
import { setModelingStatus } from '@slices'
import { Button, Tooltip } from '@mui/material'
import { CloseOutlined } from '@mui/icons-material'

export const DropModelingButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('DropModelingButton')

  const handleClick = () => {
    dispatch(setModelingStatus('idle'))
  }

  return (
    <Tooltip title={translate('dropModeling')}>
      <Button onClick={handleClick} startIcon={<CloseOutlined />}>
        {translate('drop')}
      </Button>
    </Tooltip>
  )
}
