import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { WiresLengthInfoItem } from './WiresLengthInfoItem'
import { WiresSectionInfoItem } from './WiresSectionInfoItem'
import { WiresMaterialInfoItem } from './WiresMaterialInfoItem'
import { WiresResistivityInfoItem } from './WiresResistivityInfoItem'

export const WiresInfoSection = () => {
  const translate = useTranslate('WiresInfoSection')

  return (
    <Section title={translate('title')} collapsible>
      <WiresLengthInfoItem />

      <WiresMaterialInfoItem />

      <WiresSectionInfoItem />

      <WiresResistivityInfoItem />
    </Section>
  )
}
