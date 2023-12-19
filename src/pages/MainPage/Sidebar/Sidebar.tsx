import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { CoilSection } from './CoilSection'
import { useDeviceTypeValue } from '@hooks'
import { Divider, Stack } from '@mui/material'
import { EngineSection } from './EngineSection'
import { selectIsSidebarVisible } from '@selectors'
import { WiresInfoSection } from './WiresInfoSection'
import { ResultsInfoSection } from './ResultsInfoSection'
import { OscilloscopeSection } from './OscilloscopeSection'
import { CurrentSourceSection } from './CurrentSourceSection'
import { HelmholtzCoilsSection } from './HelmholtzCoilsSection'
import {
  Toolbar,
  LanguageButton,
  ColorModeButton,
  UserGuideButton,
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
        actionButtons={[
          ColorModeButton,
          LanguageButton,
          UserGuideButton,
          ProjectDocumentButton,
        ]}
      />

      <div style={{ overflowY: 'auto' }}>
        <ResultsInfoSection />

        <Divider />

        <OscilloscopeSection />

        <CurrentSourceSection />

        <HelmholtzCoilsSection />

        <CoilSection />

        <EngineSection />

        <WiresInfoSection />
      </div>
    </Stack>
  )
}
