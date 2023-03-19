import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton } from '@components'
import { ViewVoltmeterButton } from './ViewVoltmeterButton'
import { VoltmeterVoltsInfoItem } from './VoltmeterVoltsInfoItem'

export const VoltmeterInfoSection = () => {
  const translate = useTranslate('VoltmeterInfoSection')

  return (
    <SectionWithButton
      title={translate('title')}
      Button={<ViewVoltmeterButton />}
    >
      <VoltmeterVoltsInfoItem />
    </SectionWithButton>
  )
}
