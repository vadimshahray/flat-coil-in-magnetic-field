import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton } from '@components'
import { ViewCoilButton } from './ViewCoilButton'
import { CoilWidthInfoItem } from './CoilWidthInfoItem'
import { CoilLengthInfoItem } from './CoilLengthInfoItem'
import { CoilTurnCountInfoItem } from './CoilTurnCountInfoItem'

export const CoilInfoSection = () => {
  const translate = useTranslate('CoilInfoSection')

  return (
    <SectionWithButton title={translate('title')} Button={<ViewCoilButton />}>
      <CoilTurnCountInfoItem />

      <CoilWidthInfoItem />

      <CoilLengthInfoItem />
    </SectionWithButton>
  )
}
