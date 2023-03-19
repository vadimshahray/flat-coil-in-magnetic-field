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

type Props = {
  title: string
  Icon?: Icon
  collapsible?: boolean
} & PropsWithChildren

export const Section = ({ title, Icon, children, collapsible }: Props) => {
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

        {collapsible && (
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
