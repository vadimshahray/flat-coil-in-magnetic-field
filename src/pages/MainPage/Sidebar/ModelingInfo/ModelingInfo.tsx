import React from 'react'
import { useTranslate } from '@languages'
import { Box, Stack } from '@mui/material'
import { ModelingTimer } from './ModelingTimer'
import { BoltOutlined } from '@mui/icons-material'
import { DropModelingButton } from './DropModelingButton'
import { StopStartModelingButton } from './StopStartModelingButton'
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
      <div>
        <Toolbar
          title={translate('title')}
          Icon={BoltOutlined}
          actionButtons={[
            ColorModeButton,
            LanguageButton,
            ProjectDocumentButton,
          ]}
        />
      </div>

      <Stack
        direction='row'
        spacing={1}
        justifyContent='space-between'
        sx={{ paddingX: 2, paddingY: 1 }}
      >
        <Stack direction='row' spacing={1}>
          <StopStartModelingButton />

          <DropModelingButton />
        </Stack>

        <ModelingTimer />
      </Stack>
    </Stack>
  )
}