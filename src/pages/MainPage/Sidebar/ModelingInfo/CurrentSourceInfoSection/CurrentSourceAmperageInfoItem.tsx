import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectCurrentSourceAmperage } from '@selectors'

export const CurrentSourceAmperageInfoItem = () => {
  const translate = useTranslate('CurrentSourceAmperageInfoItem')

  const amperage = useSelector(selectCurrentSourceAmperage)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', { value: amperage })}
    />
  )
}
