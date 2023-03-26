import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton } from '@components'
import { ViewCoilButton } from './ViewCoilButton'

export const CoilInfoSection = () => {
  const translate = useTranslate('CoilInfoSection')

  return (
    <SectionWithButton
      title={translate('title')}
      Button={<ViewCoilButton />}
    ></SectionWithButton>
  )
}
