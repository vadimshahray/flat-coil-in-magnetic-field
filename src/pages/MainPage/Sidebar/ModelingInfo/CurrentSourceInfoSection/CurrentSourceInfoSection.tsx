import React from 'react'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { CurrentSourceAmperageInfoItem } from './CurrentSourceAmperageInfoItem'

export const CurrentSourceInfoSection = () => {
  const translate = useTranslate('CurrentSourceInfoSection')

  return (
    <Section title={translate('title')}>
      <CurrentSourceAmperageInfoItem />
    </Section>
  )
}
