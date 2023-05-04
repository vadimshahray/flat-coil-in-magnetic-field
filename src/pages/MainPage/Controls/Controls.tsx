import React from 'react'
import { Stack } from '@mui/material'
import { SchemeControls } from './SchemeControls'
import { CameraViewControl } from './CameraViewControl'
import { ChangeSidebarVisibilityButton } from './ChangeSidebarVisibilityButton'

export const Controls = () => {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          padding: '4px 8px',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
        >
          <SchemeControls />

          <Stack direction='row' spacing={2}>
            <CameraViewControl />

            <ChangeSidebarVisibilityButton />
          </Stack>
        </Stack>
      </div>
    </div>
  )
}
