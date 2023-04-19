import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { Typography } from '@mui/material'
import { selectEngineRotationFrequency } from '@selectors'

export const EngineRotationFrequencyInfoItem = () => {
  const translate = useTranslate('EngineRotationFrequencyInfoItem')

  const rotationFrequency = useSelector(selectEngineRotationFrequency)

  return (
    <InfoItem label={translate('label')}>
      <Typography fontFamily='Fira Code, monospace'>
        {rotationFrequency}
      </Typography>
    </InfoItem>
  )
}
