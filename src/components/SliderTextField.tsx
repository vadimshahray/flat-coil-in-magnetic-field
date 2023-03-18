import { minMaxRule } from '@utils'
import { ValidatedTextField } from '@components'
import React, { useEffect, useState } from 'react'
import { Stack, Slider, Box } from '@mui/material'

export type SliderTextFieldProps = {
  min: number
  max: number
  step: number
  label: string
  adornment?: string
  endIconTooltip?: string
  EndIcon?: Icon
  value: number
  onChange: (value: number) => void
}

export const SliderTextField = ({
  label,
  adornment,
  value,
  onChange,
  EndIcon,
  endIconTooltip,
  min,
  max,
  step,
}: SliderTextFieldProps) => {
  const [fieldValue, setFieldValue] = useState(value.toString())
  const [sliderValue, setSliderValue] = useState(value)

  const onSliderChange = (_: any, sliderValue: number | number[]) => {
    if (typeof sliderValue === 'number') {
      setFieldValue(sliderValue.toString())
      setSliderValue(sliderValue)

      onChange(sliderValue)
    }
  }

  const onTextFieldValid = (textFieldValue: number) => {
    setFieldValue(textFieldValue.toString())
    setSliderValue(textFieldValue)

    onChange(textFieldValue)
  }

  useEffect(() => {
    setFieldValue(value.toString())
    setSliderValue(value)
  }, [value])

  return (
    <Stack>
      <ValidatedTextField
        label={label}
        adornment={adornment}
        value={fieldValue}
        rule={minMaxRule(min, max)}
        EndIcon={EndIcon}
        endIconTooltip={endIconTooltip}
        onValid={onTextFieldValid}
      />

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Slider
          size='small'
          min={min}
          max={max}
          step={step}
          value={sliderValue}
          onChange={onSliderChange}
        />
      </Box>
    </Stack>
  )
}
