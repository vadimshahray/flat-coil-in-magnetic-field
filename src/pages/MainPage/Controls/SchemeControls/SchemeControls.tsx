import React from 'react'
import { Paper, Stack } from '@mui/material'
import { SchemeButton } from './SchemeButton'
import { SchemeStatus } from './SchemeStatus'
import { AssembleSchemeButton } from './AssembleSchemeButton'
import { DisassembleSchemeButton } from './DisassembleSchemeButton'

export const SchemeControls = () => {
  return (
    <Paper sx={{ paddingY: 1.2, paddingX: 2 }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <SchemeStatus />

        <AssembleSchemeButton />

        <DisassembleSchemeButton />

        <SchemeButton />
      </Stack>
    </Paper>
  )
}
