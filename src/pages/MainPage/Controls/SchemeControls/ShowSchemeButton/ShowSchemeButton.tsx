import React from 'react'
import { useDisclose } from '@hooks'
import { useTranslate } from '@languages'
import { SchemeDialog } from './SchemeDialog'
import { IconButton, Tooltip } from '@mui/material'
import { OfflineBoltOutlined } from '@mui/icons-material'

export const ShowSchemeButton = () => {
  const translate = useTranslate('ShowSchemeButton')

  const { isOpen, onOpen, onClose } = useDisclose()

  return (
    <>
      <Tooltip title={translate('showScheme')}>
        <IconButton color='primary' onClick={onOpen}>
          <OfflineBoltOutlined />
        </IconButton>
      </Tooltip>

      <SchemeDialog isOpen={isOpen} onClose={onClose} />
    </>
  )
}
