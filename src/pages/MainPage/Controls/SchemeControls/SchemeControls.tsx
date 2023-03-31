import React from 'react'
import { Stack } from '@mui/material'
import { ShowSchemeButton } from './ShowSchemeButton'
import { AssembleSchemeButton } from './AssembleSchemeButton'
import { DisassembleSchemeButton } from './DisassembleSchemeButton'

export const SchemeControls = () => {
  return (
    <Stack direction='row' spacing={1} alignItems='center'>
      <ShowSchemeButton />

      <AssembleSchemeButton />

      <DisassembleSchemeButton />
    </Stack>
  )
}
