import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectModelingInduction } from '@selectors'

export const InductionInfoItem = () => {
  const translate = useTranslate('InductionInfoItem')

  const induction = useSelector(selectModelingInduction)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', { value: (induction * 1000).toFixed(3) })}
    />
  )
}
