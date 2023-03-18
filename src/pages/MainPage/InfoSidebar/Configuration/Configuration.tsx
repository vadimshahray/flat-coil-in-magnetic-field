import React from 'react'
import { Container } from '@mui/material'
import { SettingsOutlined } from '@mui/icons-material'
import {
  Section,
  Toolbar,
  ColorModeButton,
  ProjectDocumentButton,
} from '@components'

export const Configuration = () => {
  return (
    <Container disableGutters>
      <Toolbar
        title='Настройки приложения'
        Icon={SettingsOutlined}
        actionButtons={[ColorModeButton, ProjectDocumentButton]}
      />

      <Section title='Моторчик' collapsible></Section>

      <Section title='Катушка' collapsible></Section>

      <Section title='Вольтметр' collapsible></Section>

      <Section title='Катушки Гельмгольца' collapsible></Section>
    </Container>
  )
}
