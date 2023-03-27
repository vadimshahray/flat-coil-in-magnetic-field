import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { CoilTurnsCountField } from './CoilTurnsCountField'
import { CoilFrameSizeFields } from './CoilFrameSizeFields'

export const CoilSection = () => {
  const translate = useTranslate('CoilSection')

  return (
    <Section title={translate('title')}>
      <CoilTurnsCountField />

      <CoilFrameSizeFields />
    </Section>
  )
}
