import React from 'react'
import { InfoItem } from '@components'
import { useTranslate } from '@languages'
import { WIRES_MATERIAL } from '@constants'

export const WiresMaterialInfoItem = () => {
  const translate = useTranslate('WiresMaterialInfoItem')

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', {
        value: WIRES_MATERIAL,
      })}
    />
  )
}
