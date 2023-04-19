import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectCoilFrameWidth } from '@selectors'

export const CoilFrameWidthInfoItem = () => {
  const translate = useTranslate('CoilFrameWidthInfoItem')

  const frameWidth = useSelector(selectCoilFrameWidth)

  return (
    <InfoItem
      label={translate('label')}
      value={translate('value', { value: frameWidth })}
    />
  )
}
