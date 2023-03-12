import React from 'react'
import { Stack, Toolbar as MUIToolbar, Typography } from '@mui/material'

export type ToolbarProps = {
  title: string
  Icon?: Icon
  actionButtons?: ToolbarActionButton[]
}

export const Toolbar = ({ title, Icon, actionButtons }: ToolbarProps) => {
  return (
    <MUIToolbar variant='dense' sx={{ justifyContent: 'space-between' }}>
      <Stack direction='row' spacing={1} alignItems='center'>
        {Icon && <Icon />}

        <Typography variant='h6'>{title}</Typography>
      </Stack>

      <Stack direction='row' spacing={1}>
        {actionButtons?.map((Btn, i) => (
          <Btn key={i.toString()} />
        ))}
      </Stack>
    </MUIToolbar>
  )
}
