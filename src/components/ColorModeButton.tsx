import React from 'react'
import { useDispatch } from '@hooks'
import { setColorMode } from '@slices'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectUserColorMode } from '@selectors'
import { IconButton, Tooltip } from '@mui/material'
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'

export const ColorModeButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('ColorModeButton')

  const colorMode = useSelector(selectUserColorMode)

  const handleClick = () => {
    dispatch(setColorMode(colorMode === 'light' ? 'dark' : 'light'))
  }

  return (
    <Tooltip
      title={
        colorMode === 'light'
          ? translate('switchToDark')
          : translate('switchToLight')
      }
    >
      <IconButton onClick={handleClick}>
        {colorMode === 'light' ? <DarkModeOutlined /> : <LightModeOutlined />}
      </IconButton>
    </Tooltip>
  )
}
