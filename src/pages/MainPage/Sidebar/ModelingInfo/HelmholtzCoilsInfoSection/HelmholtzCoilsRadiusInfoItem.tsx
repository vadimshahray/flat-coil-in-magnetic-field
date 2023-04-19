import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectHelmholtzCoilsRadius } from '@selectors'

export const HelmholtzCoilsRadiusInfoItem = () => {
  const translate = useTranslate('HelmholtzCoilsRadiusInfoItem')

  const radius = useSelector(selectHelmholtzCoilsRadius)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', { value: radius })}
    />
  )
}
