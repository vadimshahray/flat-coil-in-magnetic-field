import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { Typography } from '@mui/material'
import { selectMotorRotationFrequency } from '@selectors'

export const MotorRotationFrequencyInfoItem = () => {
  const translate = useTranslate('MotorRotationFrequencyInfoItem')

  const rotationFrequency = useSelector(selectMotorRotationFrequency)

  return (
    <InfoItem label={translate('label')}>
      <Typography fontFamily='Fira Code, monospace'>
        {rotationFrequency}
      </Typography>
    </InfoItem>
  )
}
