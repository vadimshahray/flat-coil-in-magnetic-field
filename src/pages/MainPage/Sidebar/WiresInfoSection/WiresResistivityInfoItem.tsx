import React from 'react'
import { InfoItem } from '@components'
import { useTranslate } from '@languages'

export const WiresResistivityInfoItem = () => {
  const translate = useTranslate('WiresResistivityInfoItem')

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', {
        value: '2.8 · 10⁻⁸',
      })}
    />
  )
}
