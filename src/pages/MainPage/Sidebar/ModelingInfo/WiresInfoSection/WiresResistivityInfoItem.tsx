import React from 'react'
import { InfoItem } from '@components'
import { useTranslate } from '@languages'
import { WIRES_RESISTIVITY } from '@constants'

export const WiresResistivityInfoItem = () => {
  const translate = useTranslate('WiresResistivityInfoItem')

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', {
        value: WIRES_RESISTIVITY,
      })}
    />
  )
}
