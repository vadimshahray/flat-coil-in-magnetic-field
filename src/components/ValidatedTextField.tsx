import { useDispatch } from '@hooks'
import { addInvalidField, removeInvalidField } from '@slices'
import { InputAdornment, TextField, Tooltip } from '@mui/material'
import React, { useEffect, useMemo, useState, useRef } from 'react'
import { AnyObject, object, ValidationError, NumberSchema } from 'yup'

/** Пропсы `ValidatedTextField` */
export type ValidatedTextFieldProps = {
  /** Ярлык поля */
  label: string
  name: string
  value?: string
  /** Числовое правило валидации */
  rule: NumberSchema<number, AnyObject>
  /**
   * Колбэк, вызываемый, когда пользовательский ввод валиден
   * @param {number} value Валидное значение
   */
  onValid(value: number): unknown

  /** Приписка к полю с левой стороны */
  adornment?: string

  endIconTooltip?: string
  EndIcon?: Icon
}

/**
 * Автоматически валидируемое текстовое поле
 * @returns {JSX.Element}
 */
export const ValidatedTextField = ({
  label,
  name,
  rule,
  adornment,
  value,
  onValid,
  endIconTooltip,
  EndIcon,
}: ValidatedTextFieldProps) => {
  const dispatch = useDispatch()

  const [error, setError] = useState<string>()
  const inputRef = useRef<HTMLInputElement>(null)

  const schema = useMemo(
    () =>
      object({
        value: rule,
      }),
    [rule],
  )

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value

    schema
      .validate({
        value: newValue,
      })
      .then(({ value }) => {
        onValid(value)
        setError(undefined)
      })
      .catch((error: ValidationError) => {
        setError(error.message)
      })
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = value ?? ''
    }

    setError(undefined)
  }, [value])

  useEffect(() => {
    if (error) dispatch(addInvalidField(name))
    else dispatch(removeInvalidField(name))
  }, [name, error, dispatch])

  return (
    <TextField
      inputRef={inputRef}
      label={label}
      error={!!error}
      helperText={error}
      onChange={handleChange}
      InputProps={{
        startAdornment: adornment && (
          <InputAdornment position='start'>{adornment}</InputAdornment>
        ),
        endAdornment: EndIcon && endIconTooltip && (
          <InputAdornment position='end'>
            <Tooltip title={endIconTooltip}>
              <EndIcon fontSize='small' />
            </Tooltip>
          </InputAdornment>
        ),
      }}
    />
  )
}
