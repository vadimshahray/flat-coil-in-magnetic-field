import React from 'react'
import { useDispatch } from '@hooks'
import { dropModeling } from '@slices'
import { useTranslate } from '@languages'
import { Button, Tooltip } from '@mui/material'
import { CloseOutlined } from '@mui/icons-material'

export const DropModelingButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('DropModelingButton')

  const handleClick = () => {
    dispatch(dropModeling())
  }

  return (
    <Tooltip title={translate('dropModeling')}>
      <Button onClick={handleClick} startIcon={<CloseOutlined />}>
        {translate('drop')}
      </Button>
    </Tooltip>
  )
}
