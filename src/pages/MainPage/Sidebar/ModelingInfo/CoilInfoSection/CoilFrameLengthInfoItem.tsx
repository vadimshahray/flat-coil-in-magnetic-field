import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectCoilFrameLength } from '@selectors'

export const CoilFrameLengthInfoItem = () => {
  const translate = useTranslate('CoilFrameLengthInfoItem')

  const frameLength = useSelector(selectCoilFrameLength)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', { value: frameLength })}
    />
  )
}
