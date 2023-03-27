import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { MotorRotationFrequencyField } from './MotorRotationFrequencyField'
import { MotorRotationDirectionControl } from './MotorRotationDirectionControl'

export const MotorSection = () => {
  const translate = useTranslate('MotorSection')

  return (
    <Section title={translate('title')}>
      <MotorRotationFrequencyField />

      <MotorRotationDirectionControl />
    </Section>
  )
}
