import React from 'react'
import { Stack } from '@mui/material'
import { useTranslate } from '@languages'
import { CoilSection } from './CoilSection'
import { EngineSection } from './EngineSection'
import { SettingsOutlined } from '@mui/icons-material'
import { StartModelingButton } from './StartModelingButton'
import { CurrentSourceSection } from './CurrentSourceSection'
import { HelmholtzCoilsSection } from './HelmholtzCoilsSection'
import {
  Toolbar,
  LanguageButton,
  ColorModeButton,
  ProjectDocumentButton,
} from '@components'

export const Configuration = () => {
  const translate = useTranslate('Configuration')

  return (
    <Stack justifyContent='space-between' sx={{ height: '100%' }}>
      <Toolbar
        title={translate('title')}
        Icon={SettingsOutlined}
        actionButtons={[ColorModeButton, LanguageButton, ProjectDocumentButton]}
      />

      <div style={{ overflowY: 'auto' }}>
        <EngineSection />

        <CoilSection />

        <HelmholtzCoilsSection />

        <CurrentSourceSection />
      </div>

      <StartModelingButton />
    </Stack>
  )
}
