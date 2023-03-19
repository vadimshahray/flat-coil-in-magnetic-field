import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton, ViewDeviceButton } from '@components'
import { VoltmeterVoltsInfoItem } from './VoltmeterVoltsInfoItem'

export const VoltmeterInfoSection = () => {
  const translate = useTranslate('VoltmeterInfoSection')

  return (
    <SectionWithButton
      title={translate('title')}
      Button={<ViewDeviceButton onClick={() => null} />}
    >
      <VoltmeterVoltsInfoItem />
    </SectionWithButton>
  )
}
