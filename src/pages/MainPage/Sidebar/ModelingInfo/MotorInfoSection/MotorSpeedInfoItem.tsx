import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { Typography } from '@mui/material'
import { selectMotorSpeed } from '@selectors'

export const MotorSpeedInfoItem = () => {
  const translate = useTranslate('MotorSpeedInfoItem')

  const speed = useSelector(selectMotorSpeed)

  return (
    <InfoItem label={translate('label')}>
      <Typography fontFamily='Fira Code, monospace'>{speed}</Typography>
    </InfoItem>
  )
}
