import React from 'react'
import { InfoItem } from '@components'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { Typography } from '@mui/material'
import { selectModelingInduction } from '@selectors'

export const InductionInfoItem = () => {
  const translate = useTranslate('InductionInfoItem')

  const induction = useSelector(selectModelingInduction)

  return (
    <InfoItem label={translate('label')}>
      <Typography fontFamily='Fira Code, monospace'>
        {induction.toFixed(3)}
      </Typography>
    </InfoItem>
  )
}
