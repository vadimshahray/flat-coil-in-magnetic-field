import React from 'react'
import { Stack } from '@mui/material'
import { useTranslate } from '@languages'
import { MotorSection } from './MotorSection'
import { SettingsOutlined } from '@mui/icons-material'
import { StartModelingButton } from './StartModelingButton'
import {
  Section,
  Toolbar,
  LanguageButton,
  ColorModeButton,
  ProjectDocumentButton,
} from '@components'

export const Configuration = () => {
  const translate = useTranslate('Configuration')

  return (
    <Stack justifyContent='space-between' sx={{ height: '100%' }}>
      <div>
        <Toolbar
          title={translate('title')}
          Icon={SettingsOutlined}
          actionButtons={[
            ColorModeButton,
            LanguageButton,
            ProjectDocumentButton,
          ]}
        />

        <MotorSection />

        <Section title={translate('coilSection')}></Section>

        <Section title={translate('voltmeterSection')}></Section>

        <Section title={translate('HelmholtzCoils')}></Section>
      </div>

      <StartModelingButton />
    </Stack>
  )
}