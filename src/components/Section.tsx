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
  defaultCollapsed?: boolean
} & PropsWithChildren

export const Section = ({
  title,
  Icon,
  children,
  collapsible,
  defaultCollapsed = false,
}: Props) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)

  const handleClick = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Container>
      <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Typography variant='subtitle1' display='flex' alignItems='center'>
          {Icon && <Icon sx={{ marginRight: 1 }} />}

          {title}
        </Typography>

        {collapsible && (
          <Tooltip title={!collapsed ? 'Свернуть' : 'Развернуть'}>
            <IconButton onClick={handleClick} size='small'>
              {!collapsed ? <ExpandLess /> : <ExpandMore />}
            </IconButton>
          </Tooltip>
        )}
      </Stack>

      <Collapse in={!collapsed}>{children}</Collapse>
    </Container>
  )
}
