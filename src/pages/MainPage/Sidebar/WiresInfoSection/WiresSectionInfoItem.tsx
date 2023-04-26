import React from 'react'
import { InfoItem } from '@components'
import { useTranslate } from '@languages'
import { WIRES_SECTION } from '@constants'

export const WiresSectionInfoItem = () => {
  const translate = useTranslate('WiresSectionInfoItem')

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', {
        value: WIRES_SECTION,
      })}
    />
  )
}
