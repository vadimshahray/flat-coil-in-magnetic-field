import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { HelmholtzCoilsRadiusField } from './HelmholtzCoilsRadiusField'
import { HelmholtzCoilsTurnsCountField } from './HelmholtzCoilsTurnsCountField'

export const HelmholtzCoilsSection = () => {
  const translate = useTranslate('HelmholtzCoilsSection')

  return (
    <Section title={translate('title')}>
      <HelmholtzCoilsRadiusField />

      <HelmholtzCoilsTurnsCountField />
    </Section>
  )
}
