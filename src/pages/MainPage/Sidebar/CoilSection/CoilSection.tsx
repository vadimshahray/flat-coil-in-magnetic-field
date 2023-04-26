import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { CoilTurnsCountField } from './CoilTurnsCountField'
import { CoilSizeFields } from './CoilSizeFields'

export const CoilSection = () => {
  const translate = useTranslate('CoilSection')

  return (
    <Section title={translate('title')} collapsible>
      <CoilTurnsCountField />

      <CoilSizeFields />
    </Section>
  )
}
