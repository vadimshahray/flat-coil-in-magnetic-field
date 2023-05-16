import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { VoltageInfoItem } from './VoltageInfoItem'
import { AmperageInfoItem } from './AmperageInfoItem'
import { InductionInfoItem } from './InductionInfoItem'

export const ResultsInfoSection = () => {
  const translate = useTranslate('ResultsInfoSection')

  return (
    <Section title={translate('title')}>
      <InductionInfoItem />

      <VoltageInfoItem />

      {/* <AmperageInfoItem /> */}
    </Section>
  )
}
