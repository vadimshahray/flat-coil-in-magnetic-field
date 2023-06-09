import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectModelingOperatingVoltage } from '@selectors'

export const VoltageInfoItem = () => {
  const translate = useTranslate('VoltageInfoItem')

  const voltage = useSelector(selectModelingOperatingVoltage)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', {
        value: voltage.toFixed(3),
      })}
    />
  )
}
