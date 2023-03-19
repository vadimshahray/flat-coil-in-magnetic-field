import { minMaxRule } from '@utils'
import { useTranslate } from '@languages'
import { ValidatedTextField } from '@components'
import { Stack, Slider, Container } from '@mui/material'
import React, { useEffect, useMemo, useState } from 'react'

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
  const translate = useTranslate('SliderTextField')

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

  const validationRule = useMemo(
    () =>
      minMaxRule({
        min,
        max,
        typeError: translate('typeError'),
        minError: translate('minError', { number: min }),
        maxError: translate('maxError', { number: max }),
        requiredError: translate('requiredError'),
      }),
    [min, max, translate],
  )

  return (
    <Stack>
      <ValidatedTextField
        label={label}
        adornment={adornment}
        value={fieldValue}
        rule={validationRule}
        EndIcon={EndIcon}
        endIconTooltip={endIconTooltip}
        onValid={onTextFieldValid}
      />

      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingY: 0,
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
      </Container>
    </Stack>
  )
}
