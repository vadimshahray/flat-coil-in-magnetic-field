import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { MotorSpeedField } from './MotorSpeedField'

export const MotorSection = () => {
  const translate = useTranslate('MotorSection')

  return (
    <Section title={translate('title')}>
      <MotorSpeedField />
    </Section>
  )
}
