import React from 'react'
import { useDispatch } from '@hooks'
import { Button } from '@mui/material'
import { useTranslate } from '@languages'
import { dropAllConnections } from '@slices'
import { CloseOutlined } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectAreAllWiresDisconnected } from '@selectors'

export const DisassembleSchemeButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('DisassembleSchemeButton')

  const areAllWiresDisconnected = useSelector(selectAreAllWiresDisconnected)

  const handleClick = () => {
    dispatch(dropAllConnections())
  }

  return !areAllWiresDisconnected ? (
    <Button onClick={handleClick} startIcon={<CloseOutlined />}>
      {translate('disassembleScheme')}
    </Button>
  ) : null
}
