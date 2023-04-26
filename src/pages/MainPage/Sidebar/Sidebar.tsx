import React from 'react'
import { Stack } from '@mui/material'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { CoilSection } from './CoilSection'
import { useDeviceTypeValue } from '@hooks'
import { EngineSection } from './EngineSection'
import { selectIsSidebarVisible } from '@selectors'
import { WiresInfoSection } from './WiresInfoSection'
import { ResultsInfoSection } from './ResultsInfoSection'
import { CurrentSourceSection } from './CurrentSourceSection'
import { HelmholtzCoilsSection } from './HelmholtzCoilsSection'
import {
  Toolbar,
  LanguageButton,
  ColorModeButton,
  ProjectDocumentButton,
} from '@components'

export const Sidebar = () => {
  const translate = useTranslate('Sidebar')

  const isSidebarVisible = useSelector(selectIsSidebarVisible)

  const sidebarWidth = useDeviceTypeValue(400, '100%')

  return (
    <Stack
      sx={{
        height: '100%',
        width: isSidebarVisible ? sidebarWidth : 0,
        overflowY: 'auto',
      }}
    >
      <Toolbar
        title={translate('title')}
        actionButtons={[ColorModeButton, LanguageButton, ProjectDocumentButton]}
      />

      <div style={{ overflowY: 'auto' }}>
        <EngineSection />

        <CurrentSourceSection />

        <CoilSection />

        <HelmholtzCoilsSection />

        <WiresInfoSection />

        <ResultsInfoSection />
      </div>
    </Stack>
  )
}
