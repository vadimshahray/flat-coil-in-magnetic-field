import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectCoilTurnsCount } from '@selectors'

export const CoilTurnCountInfoItem = () => {
  const translate = useTranslate('CoilTurnCountInfoItem')

  const turnCount = useSelector(selectCoilTurnsCount)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', { value: turnCount })}
    />
  )
}
