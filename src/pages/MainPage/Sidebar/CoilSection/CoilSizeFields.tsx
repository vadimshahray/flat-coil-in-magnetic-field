import React from 'react'
import { Stack } from '@mui/material'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { SliderTextField } from '@components'
import { setCoilFrameLength, setCoilFrameWidth } from '@slices'
import { selectCoilFrameWidth, selectCoilFrameLength } from '@selectors'
import {
  COIL_FRAME_LENGTH_MAX,
  COIL_FRAME_LENGTH_MIN,
  COIL_FRAME_LENGTH_STEP,
  COIL_FRAME_WIDTH_MAX,
  COIL_FRAME_WIDTH_MIN,
  COIL_FRAME_WIDTH_STEP,
} from '@constants'

export const CoilSizeFields = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('CoilSizeFields')

  const frameWidth = useSelector(selectCoilFrameWidth)
  const frameLength = useSelector(selectCoilFrameLength)

  const handleFrameWidthChange = (newWidth: number) => {
    dispatch(setCoilFrameWidth(newWidth))
  }

  const handleFrameLengthChange = (newLength: number) => {
    dispatch(setCoilFrameLength(newLength))
  }

  return (
    <Stack direction='row' spacing={1}>
      <SliderTextField
        label={translate('widthLabel')}
        value={frameWidth}
        onChange={handleFrameWidthChange}
        min={COIL_FRAME_WIDTH_MIN}
        max={COIL_FRAME_WIDTH_MAX}
        step={COIL_FRAME_WIDTH_STEP}
        adornment='b'
      />

      <SliderTextField
        name='coil_frame_length'
        label={translate('lengthLabel')}
        value={frameLength}
        onChange={handleFrameLengthChange}
        min={COIL_FRAME_LENGTH_MIN}
        max={COIL_FRAME_LENGTH_MAX}
        step={COIL_FRAME_LENGTH_STEP}
        adornment='L'
      />
    </Stack>
  )
}
