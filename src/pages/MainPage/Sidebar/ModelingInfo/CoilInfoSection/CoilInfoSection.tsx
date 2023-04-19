import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton } from '@components'
import { ViewCoilButton } from './ViewCoilButton'
import { CoilTurnCountInfoItem } from './CoilTurnCountInfoItem'
import { CoilFrameWidthInfoItem } from './CoilFrameWidthInfoItem'
import { CoilFrameLengthInfoItem } from './CoilFrameLengthInfoItem'

export const CoilInfoSection = () => {
  const translate = useTranslate('CoilInfoSection')

  return (
    <SectionWithButton title={translate('title')} Button={<ViewCoilButton />}>
      <CoilTurnCountInfoItem />

      <CoilFrameWidthInfoItem />

      <CoilFrameLengthInfoItem />
    </SectionWithButton>
  )
}
