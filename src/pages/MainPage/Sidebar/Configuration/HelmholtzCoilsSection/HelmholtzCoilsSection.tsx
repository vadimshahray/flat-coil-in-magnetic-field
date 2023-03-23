import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'

export const HelmholtzCoilsSection = () => {
  const translate = useTranslate('HelmholtzCoilsSection')

  return <Section title={translate('title')}></Section>
}
