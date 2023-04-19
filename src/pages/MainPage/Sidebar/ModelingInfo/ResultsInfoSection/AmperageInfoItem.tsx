import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { Typography } from '@mui/material'
import { selectModelingAmperage, selectModelingAmperageMax } from '@selectors'

export const AmperageInfoItem = () => {
  const translate = useTranslate('AmperageInfoItem')

  const amperage = useSelector(selectModelingAmperage)
  const amperageMax = useSelector(selectModelingAmperageMax)

  return (
    <InfoItem label={translate('label')}>
      <Typography fontFamily='Fira Code, monospace'>
        {`${amperage.toFixed(3)} (${amperageMax.toFixed(3)})`}
      </Typography>
    </InfoItem>
  )
}
