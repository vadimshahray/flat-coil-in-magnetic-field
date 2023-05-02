import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { OscilloscopePowerButton } from './OscilloscopePowerButton'

export const OscilloscopeSection = () => {
  const translate = useTranslate('OscilloscopeSection')

  return (
    <Section title={translate('title')} collapsible>
      <OscilloscopePowerButton />
    </Section>
  )
}
