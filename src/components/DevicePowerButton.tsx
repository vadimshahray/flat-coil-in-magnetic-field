import React from 'react'
import { useTranslate } from '@languages'
import { Button, Stack } from '@mui/material'
import { PowerSettingsNew } from '@mui/icons-material'

type Props = {
  isPowered: boolean
  onClick: (value: boolean) => void
}

export const DevicePowerButton = ({ isPowered, onClick }: Props) => {
  const translate = useTranslate('DevicePowerButton')

  const handleClick = () => {
    onClick(!isPowered)
  }

  return (
    <Stack alignItems='flex-end'>
      <Button
        color={isPowered ? 'error' : 'success'}
        startIcon={<PowerSettingsNew />}
        onClick={handleClick}
      >
        {translate(isPowered ? 'powerOff' : 'powerOn')}
      </Button>
    </Stack>
  )
}
