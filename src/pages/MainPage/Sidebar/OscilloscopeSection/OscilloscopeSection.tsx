import React from 'react'
import { Stack } from '@mui/material'
import { Section } from '@components'
import { useTranslate } from '@languages'
import { OscilloscopeScaleXField } from './OscilloscopeScaleXField'
import { OscilloscopeScaleYField } from './OscilloscopeScaleYField'
import { OscilloscopePowerButton } from './OscilloscopePowerButton'
import { OscilloscopeContrastField } from './OscilloscopeContrastField'

export const OscilloscopeSection = () => {
  const translate = useTranslate('OscilloscopeSection')

  return (
    <Section title={translate('title')} collapsible>
      <Stack direction='row' spacing={1}>
        <OscilloscopeScaleYField />

        <OscilloscopeScaleXField />
      </Stack>

      <OscilloscopeContrastField />

      <OscilloscopePowerButton />
    </Section>
  )
}
