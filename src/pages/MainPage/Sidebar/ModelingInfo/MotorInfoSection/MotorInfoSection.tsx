import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton } from '@components'
import { ViewMotorButton } from './ViewMotorButton'
import { MotorRotationFrequencyInfoItem } from './MotorRotationFrequencyInfoItem'

export const MotorInfoSection = () => {
  const translate = useTranslate('MotorInfoSection')

  return (
    <SectionWithButton title={translate('title')} Button={<ViewMotorButton />}>
      <MotorRotationFrequencyInfoItem />
    </SectionWithButton>
  )
}
