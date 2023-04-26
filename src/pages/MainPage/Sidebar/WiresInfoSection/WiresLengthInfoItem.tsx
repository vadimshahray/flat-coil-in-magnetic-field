import React from 'react'
import { InfoItem } from '@components'
import { useTranslate } from '@languages'
import { WIRES_LENGTH } from '@constants'

export const WiresLengthInfoItem = () => {
  const translate = useTranslate('WiresLengthInfoItem')

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', {
        value: WIRES_LENGTH,
      })}
    />
  )
}
