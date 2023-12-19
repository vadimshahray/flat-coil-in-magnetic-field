import React from 'react'
import { useDisclose } from '@hooks'
import { useTranslate } from '@languages'
import { InfoOutlined } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import { UserGuideDialog } from 'src/pages/MainPage/UserGuideDialog'

export const UserGuideButton = () => {
  const translate = useTranslate('UserGuideButton')

  const { isOpen, onClose, onOpen } = useDisclose()

  return (
    <>
      <Tooltip title={translate('text')}>
        <IconButton onClick={onOpen}>
          <InfoOutlined />
        </IconButton>
      </Tooltip>

      <UserGuideDialog isOpen={isOpen} onClose={onClose} />
    </>
  )
}
