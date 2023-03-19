import React from 'react'
import { InfoItem } from '@components'
import { useTranslate } from '@languages'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { selectVoltmeterVolts } from '@selectors'

export const VoltmeterVoltsInfoItem = () => {
  const translate = useTranslate('VoltmeterVoltsInfoItem')

  const volts = useSelector(selectVoltmeterVolts)

  return (
    <InfoItem label={translate('label')}>
      <Typography fontFamily='Fira Code, monospace'>{volts}</Typography>
    </InfoItem>
  )
}
