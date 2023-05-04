import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { setSceneCameraViewPoint } from '@slices'
import { VideocamOutlined } from '@mui/icons-material'
import { selectSceneCameraViewPoint } from '@selectors'
import { Paper, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'

export const CameraViewControl = () => {
  const dispatch = useDispatch()

  const view = useSelector(selectSceneCameraViewPoint)

  const handleChange = (_: any, newView: string) => {
    dispatch(setSceneCameraViewPoint(newView as CameraViewPoint | undefined))
  }

  return (
    <Paper sx={{ paddingY: 1.2, paddingX: 2 }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <VideocamOutlined />

        <ToggleButtonGroup value={view} onChange={handleChange} exclusive>
          <ToggleButton value='@Engine'>Д</ToggleButton>
          <ToggleButton value='@Coil'>К</ToggleButton>
          <ToggleButton value='@HelmholtzCoils'>КГ</ToggleButton>
          <ToggleButton value='@CurrentSource'>ИТ</ToggleButton>
          <ToggleButton value='@Oscilloscope'>О</ToggleButton>
          <ToggleButton value='@Voltmeter'>В</ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Paper>
  )
}
