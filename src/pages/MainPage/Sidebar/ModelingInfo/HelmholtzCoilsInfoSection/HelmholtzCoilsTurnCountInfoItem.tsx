import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectHelmholtzCoilsTurnsCount } from '@selectors'

export const HelmholtzCoilsTurnCountInfoItem = () => {
  const translate = useTranslate('HelmholtzCoilsTurnCountInfoItem')

  const turnCount = useSelector(selectHelmholtzCoilsTurnsCount)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', { value: turnCount })}
    />
  )
}
