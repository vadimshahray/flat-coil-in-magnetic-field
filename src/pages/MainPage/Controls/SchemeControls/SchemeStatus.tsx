import React from 'react'
import { Tooltip } from '@mui/material'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { selectSchemeStatus } from '@selectors'
import { ElectricalServicesOutlined } from '@mui/icons-material'

export const SchemeStatus = () => {
  const translate = useTranslate('SchemeStatus')

  const status = useSelector(selectSchemeStatus)

  const color =
    status === 'assembled'
      ? 'success'
      : status === 'disassembled'
      ? 'warning'
      : 'error'

  return (
    <Tooltip title={translate(status)}>
      {<ElectricalServicesOutlined color={color} />}
    </Tooltip>
  )
}
