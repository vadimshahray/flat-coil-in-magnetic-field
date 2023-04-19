import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { EngineRotationFrequencyField } from './EngineRotationFrequencyField'
import { EngineRotationDirectionControl } from './EngineRotationDirectionControl'

export const EngineSection = () => {
  const translate = useTranslate('EngineSection')

  return (
    <Section title={translate('title')}>
      <EngineRotationFrequencyField />

      <EngineRotationDirectionControl />
    </Section>
  )
}
