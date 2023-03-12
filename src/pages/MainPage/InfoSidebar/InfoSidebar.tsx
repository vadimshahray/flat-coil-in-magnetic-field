import React from 'react'
import { Section } from '@components'
import { Container } from '@mui/material'

export const InfoSidebar = () => {
  return (
    <Container>
      <Section title='Моторчик' collapsible></Section>
      <Section title='Катушка' collapsible></Section>
      <Section title='Вольтметр' collapsible></Section>
      <Section title='Катушки Гельмгольца' collapsible></Section>
    </Container>
  )
}
