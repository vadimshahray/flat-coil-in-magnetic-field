import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { setSceneCameraViewPoint } from '@slices'
import { VideocamOutlined } from '@mui/icons-material'
import { selectSceneCameraViewPoint } from '@selectors'
import {
  Paper,
  Stack,
  Tooltip,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material'

export const CameraViewControl = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('CameraViewControl')

  const view = useSelector(selectSceneCameraViewPoint)

  const handleChange = (_: any, newView: string) => {
    dispatch(setSceneCameraViewPoint(newView as CameraViewPoint | undefined))
  }

  return (
    <Paper sx={{ paddingY: 1.2, paddingX: 2 }}>
      <Stack direction='row' spacing={2} alignItems='center'>
        <VideocamOutlined />

        <ToggleButtonGroup value={view} onChange={handleChange} exclusive>
          <Tooltip title={translate('oscilloscope')}>
            <ToggleButton
              value='@Oscilloscope'
              selected={view === '@Oscilloscope'}
            >
              {translate('oscilloscopeShort')}
            </ToggleButton>
          </Tooltip>

          <Tooltip title={translate('currentSource')}>
            <ToggleButton
              value='@CurrentSource'
              selected={view === '@CurrentSource'}
            >
              {translate('currentSourceShort')}
            </ToggleButton>
          </Tooltip>

          <Tooltip title={translate('HelmholtzCoils')}>
            <ToggleButton
              value='@HelmholtzCoils'
              selected={view === '@HelmholtzCoils'}
            >
              {translate('HelmholtzCoilsShort')}
            </ToggleButton>
          </Tooltip>

          <Tooltip title={translate('coil')}>
            <ToggleButton value='@Coil' selected={view === '@Coil'}>
              {translate('coilShort')}
            </ToggleButton>
          </Tooltip>

          <Tooltip title={translate('voltmeter')}>
            <ToggleButton value='@Voltmeter' selected={view === '@Voltmeter'}>
              {translate('voltmeterShort')}
            </ToggleButton>
          </Tooltip>

          <Tooltip title={translate('engine')}>
            <ToggleButton value='@Engine' selected={view === '@Engine'}>
              {translate('engineShort')}
            </ToggleButton>
          </Tooltip>
        </ToggleButtonGroup>
      </Stack>
    </Paper>
  )
}
