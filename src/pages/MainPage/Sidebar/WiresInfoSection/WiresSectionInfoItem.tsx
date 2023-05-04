import React from 'react'
import { InfoItem } from '@components'
import { useTranslate } from '@languages'

export const WiresSectionInfoItem = () => {
  const translate = useTranslate('WiresSectionInfoItem')

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', {
        value: '5 · 10⁻⁶',
      })}
    />
  )
}
