import React from 'react'
import { Container } from '@mui/material'
import { Section, Toolbar } from '@components'
import { SettingsOutlined } from '@mui/icons-material'

export const Configuration = () => {
  return (
    <Container>
      <Toolbar title='Настройки моделирования' Icon={SettingsOutlined} />

      <Section title='Моторчик' collapsible></Section>

      <Section title='Катушка' collapsible></Section>

      <Section title='Вольтметр' collapsible></Section>

      <Section title='Катушки Гельмгольца' collapsible></Section>
    </Container>
  )
}
