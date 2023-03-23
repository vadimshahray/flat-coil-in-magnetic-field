import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { MotorSpeedField } from './MotorSpeedField'
import { MotorRotationDirectionControl } from './MotorRotationDirectionControl'

export const MotorSection = () => {
  const translate = useTranslate('MotorSection')

  return (
    <Section title={translate('title')}>
      <MotorSpeedField />

      <MotorRotationDirectionControl />
    </Section>
  )
}
