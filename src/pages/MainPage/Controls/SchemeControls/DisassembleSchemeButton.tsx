import React from 'react'
import { useDispatch } from '@hooks'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { disassemblyScheme } from '@slices'
import { selectSchemeStatus } from '@selectors'
import { CloseOutlined } from '@mui/icons-material'

export const DisassembleSchemeButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('DisassembleSchemeButton')

  const isSchemeDisassembled =
    useSelector(selectSchemeStatus) === 'disassembled'

  const handleClick = () => {
    dispatch(disassemblyScheme())
  }

  return !isSchemeDisassembled ? (
    <Button
      variant='contained'
      onClick={handleClick}
      startIcon={<CloseOutlined />}
    >
      {translate('disassembleScheme')}
    </Button>
  ) : null
}
