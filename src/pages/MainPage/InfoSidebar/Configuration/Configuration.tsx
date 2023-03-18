import React from 'react'
import { Container } from '@mui/material'
import { SettingsOutlined } from '@mui/icons-material'
import {
  Section,
  Toolbar,
  LanguageButton,
  ColorModeButton,
  ProjectDocumentButton,
} from '@components'
import { useTranslate } from '@languages'

export const Configuration = () => {
  const translate = useTranslate('Configuration')

  return (
    <Container disableGutters>
      <Toolbar
        title={translate('title')}
        Icon={SettingsOutlined}
        actionButtons={[ColorModeButton, LanguageButton, ProjectDocumentButton]}
      />

      <Section title={translate('motorSection')} collapsible></Section>

      <Section title={translate('coilSection')} collapsible></Section>

      <Section title={translate('voltmeterSection')} collapsible></Section>

      <Section title={translate('HelmholtzCoils')} collapsible></Section>
    </Container>
  )
}
