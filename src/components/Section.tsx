import React from 'react'
import { useState, PropsWithChildren } from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
  Stack,
  Tooltip,
  Collapse,
  Container,
  IconButton,
  Typography,
} from '@mui/material'

export type SectionProps = {
  title: string
  Icon?: Icon
  notCollapsible?: boolean
} & PropsWithChildren

export const Section = ({
  title,
  Icon,
  children,
  notCollapsible,
}: SectionProps) => {
  const [expanded, setExpanded] = useState(true)

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Container>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography variant='subtitle1' display='flex' alignItems='center'>
          {Icon && <Icon sx={{ marginRight: 1 }} />}
          {title}
        </Typography>

        {!notCollapsible && (
          <Tooltip title={expanded ? 'Свернуть' : 'Развернуть'}>
            <IconButton onClick={handleClick} size='small'>
              {expanded ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Tooltip>
        )}
      </Stack>

      <Collapse in={expanded}>{children}</Collapse>
    </Container>
  )
}
