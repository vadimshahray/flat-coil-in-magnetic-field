import React from 'react'
import { Stack } from '@mui/material'
import { SchemeButton } from './SchemeButton'
import { SchemeStatus } from './SchemeStatus'
import { AssembleSchemeButton } from './AssembleSchemeButton'
import { DisassembleSchemeButton } from './DisassembleSchemeButton'

export const SchemeControls = () => {
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <SchemeStatus />

      <AssembleSchemeButton />

      <DisassembleSchemeButton />

      <SchemeButton />
    </Stack>
  )
}
