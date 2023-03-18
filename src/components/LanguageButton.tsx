import React from 'react'
import { setLanguage } from '@slices'
import { useTranslate } from '@languages'
import { selectUserLanguage } from '@selectors'
import { IconButton, Tooltip } from '@mui/material'
import { LanguageOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'

export const LanguageButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('LanguageButton')

  const userLanguage = useSelector(selectUserLanguage)

  const handleClick = () => {
    dispatch(setLanguage(userLanguage === 'ru' ? 'en' : 'ru'))
  }

  return (
    <Tooltip title={translate('switchLanguage')}>
      <IconButton onClick={handleClick}>
        <LanguageOutlined />
      </IconButton>
    </Tooltip>
  )
}
