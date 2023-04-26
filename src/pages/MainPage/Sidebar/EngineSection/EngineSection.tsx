import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { EnginePowerButton } from './EnginePowerButton'
import { EngineRotationFrequencyField } from './EngineRotationFrequencyField'

export const EngineSection = () => {
  const translate = useTranslate('EngineSection')

  return (
    <Section title={translate('title')} collapsible>
      <EngineRotationFrequencyField />

      <EnginePowerButton />
    </Section>
  )
}
