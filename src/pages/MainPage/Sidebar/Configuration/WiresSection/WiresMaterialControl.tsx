import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { setWireMaterial } from '@slices'
import { selectWireMaterial } from '@selectors'
import {
  Radio,
  FormLabel,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from '@mui/material'

export const WiresMaterialControl = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('WiresMaterialControl')

  const material = useSelector(selectWireMaterial)

  const handleChange = (_: any, value: string) => {
    dispatch(setWireMaterial(value as MetalMaterial))
  }

  return (
    <FormControl>
      <FormLabel>{translate('label')}</FormLabel>

      <RadioGroup
        value={material}
        onChange={handleChange}
        sx={{ display: 'flex', flexDirection: 'row' }}
      >
        <FormControlLabel
          label={translate('copper')}
          value='copper'
          control={<Radio size='small' />}
        />

        <FormControlLabel
          label={translate('aluminum')}
          value='aluminum'
          control={<Radio size='small' />}
        />
      </RadioGroup>
    </FormControl>
  )
}
