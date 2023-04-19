import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { Typography } from '@mui/material'
import { selectModelingVoltage, selectModelingVoltageMax } from '@selectors'

export const VoltageInfoItem = () => {
  const translate = useTranslate('VoltageInfoItem')

  const voltage = useSelector(selectModelingVoltage)
  const voltageMax = useSelector(selectModelingVoltageMax)

  return (
    <InfoItem label={translate('label')}>
      <Typography fontFamily='Fira Code, monospace'>
        {`${voltage.toFixed(3)} (${voltageMax.toFixed(3)})`}
      </Typography>
    </InfoItem>
  )
}
