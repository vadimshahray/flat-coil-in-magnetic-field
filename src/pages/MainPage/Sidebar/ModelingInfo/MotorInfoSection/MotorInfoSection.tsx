import React from 'react'
import { useTranslate } from '@languages'
import { MotorSpeedInfoItem } from './MotorSpeedInfoItem'
import { SectionWithButton, ViewDeviceButton } from '@components'

export const MotorInfoSection = () => {
  const translate = useTranslate('MotorInfoSection')

  return (
    <SectionWithButton
      title={translate('title')}
      Button={<ViewDeviceButton onClick={() => null} />}
    >
      <MotorSpeedInfoItem />
    </SectionWithButton>
  )
}
