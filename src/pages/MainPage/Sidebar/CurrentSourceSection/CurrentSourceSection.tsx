import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { CurrentSourcePowerButton } from './CurrentSourcePowerButton'
import { CurrentSourcesAmperageField } from './CurrentSourceAmperageField'

export const CurrentSourceSection = () => {
  const translate = useTranslate('CurrentSourceSection')

  return (
    <Section title={translate('title')} collapsible>
      <CurrentSourcesAmperageField />

      <CurrentSourcePowerButton />
    </Section>
  )
}
