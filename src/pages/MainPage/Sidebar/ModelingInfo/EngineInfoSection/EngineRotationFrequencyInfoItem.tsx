import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectEngineRotationFrequency } from '@selectors'

export const EngineRotationFrequencyInfoItem = () => {
  const translate = useTranslate('EngineRotationFrequencyInfoItem')

  const rotationFrequency = useSelector(selectEngineRotationFrequency)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', { value: rotationFrequency })}
    />
  )
}
