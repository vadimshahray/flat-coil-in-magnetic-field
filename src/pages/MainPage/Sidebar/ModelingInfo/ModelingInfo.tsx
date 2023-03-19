import React from 'react'
import { useTranslate } from '@languages'
import { Box, Stack } from '@mui/material'
import { BoltOutlined } from '@mui/icons-material'
import {
  Toolbar,
  LanguageButton,
  ColorModeButton,
  ProjectDocumentButton,
} from '@components'

export const ModelingInfo = () => {
  const translate = useTranslate('ModelingInfo')

  return (
    <Stack justifyContent='space-between' sx={{ height: '100%' }}>
      <Box>
        <Toolbar
          title={translate('title')}
          Icon={BoltOutlined}
          actionButtons={[
            ColorModeButton,
            LanguageButton,
            ProjectDocumentButton,
          ]}
        />
      </Box>
    </Stack>
  )
}
