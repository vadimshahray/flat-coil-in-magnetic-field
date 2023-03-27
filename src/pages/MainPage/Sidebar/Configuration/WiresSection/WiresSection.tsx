import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { WiresMaterialControl } from './WiresMaterialControl'

export const WiresSection = () => {
  const translate = useTranslate('WiresSection')

  return (
    <Section title={translate('title')}>
      <WiresMaterialControl />
    </Section>
  )
}
