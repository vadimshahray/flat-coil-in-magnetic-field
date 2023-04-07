import React from 'react'
import { useDisclose } from '@hooks'
import { useTranslate } from '@languages'
import { SchemeDialog } from './SchemeDialog'
import { HelpOutline } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

export const SchemeButton = () => {
  const translate = useTranslate('SchemeButton')

  const { isOpen, onOpen, onClose } = useDisclose()

  return (
    <>
      <Tooltip title={translate('aboutScheme')}>
        <IconButton color='primary' onClick={onOpen}>
          <HelpOutline />
        </IconButton>
      </Tooltip>

      <SchemeDialog isOpen={isOpen} onClose={onClose} />
    </>
  )
}
