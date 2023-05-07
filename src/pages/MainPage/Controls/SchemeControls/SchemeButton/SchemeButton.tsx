import React from 'react'
import { useDisclose } from '@hooks'
import { useTranslate } from '@languages'
import { SchemeDialog } from './SchemeDialog'
import { CableOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

export const SchemeButton = () => {
  const translate = useTranslate('SchemeButton')

  const { isOpen, onOpen, onClose } = useDisclose()

  return (
    <>
      <Tooltip title={translate('aboutScheme')}>
        <IconButton color='primary' onClick={onOpen}>
          <CableOutlined />
        </IconButton>
      </Tooltip>

      <SchemeDialog isOpen={isOpen} onClose={onClose} />
    </>
  )
}
