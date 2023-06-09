import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectModelingAmperage } from '@selectors'

export const AmperageInfoItem = () => {
  const translate = useTranslate('AmperageInfoItem')

  const amperage = useSelector(selectModelingAmperage)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', {
        value: amperage.toFixed(3),
      })}
    />
  )
}
