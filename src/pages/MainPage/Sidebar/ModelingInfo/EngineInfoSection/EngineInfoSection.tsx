import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton } from '@components'
import { ViewEngineButton } from './ViewEngineButton'
import { EngineRotationFrequencyInfoItem } from './EngineRotationFrequencyInfoItem'

export const EngineInfoSection = () => {
  const translate = useTranslate('EngineInfoSection')

  return (
    <SectionWithButton title={translate('title')} Button={<ViewEngineButton />}>
      <EngineRotationFrequencyInfoItem />
    </SectionWithButton>
  )
}
