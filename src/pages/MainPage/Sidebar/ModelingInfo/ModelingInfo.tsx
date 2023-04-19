import React from 'react'
import { Stack } from '@mui/material'
import { useTranslate } from '@languages'
import { ModelingTimer } from './ModelingTimer'
import { BoltOutlined } from '@mui/icons-material'
import { CoilInfoSection } from './CoilInfoSection'
import { MotorInfoSection } from './MotorInfoSection'
import { ResultsInfoSection } from './ResultsInfoSection'
import { DropModelingButton } from './DropModelingButton'
import { VoltmeterInfoSection } from './VoltmeterInfoSection'
import { StopStartModelingButton } from './StopStartModelingButton'
import { HelmholtzCoilsInfoSection } from './HelmholtzCoilsInfoSection'
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

        <MotorInfoSection />

        <CoilInfoSection />

        <HelmholtzCoilsInfoSection />

        <VoltmeterInfoSection />

        <ResultsInfoSection />
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
