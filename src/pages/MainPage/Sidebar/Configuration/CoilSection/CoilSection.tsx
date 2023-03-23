import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'

export const CoilSection = () => {
  const translate = useTranslate('CoilSection')

  return <Section title={translate('title')}></Section>
}
