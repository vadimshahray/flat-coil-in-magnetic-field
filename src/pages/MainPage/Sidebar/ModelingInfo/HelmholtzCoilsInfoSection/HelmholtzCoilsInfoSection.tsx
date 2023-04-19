import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton } from '@components'
import { ViewHelmholtzCoilsButton } from './ViewHelmholtzCoilsButton'
import { HelmholtzCoilsRadiusInfoItem } from './HelmholtzCoilsRadiusInfoItem'
import { HelmholtzCoilsTurnCountInfoItem } from './HelmholtzCoilsTurnCountInfoItem'

export const HelmholtzCoilsInfoSection = () => {
  const translate = useTranslate('HelmholtzCoilsInfoSection')

  return (
    <SectionWithButton
      title={translate('title')}
      Button={<ViewHelmholtzCoilsButton />}
    >
      <HelmholtzCoilsTurnCountInfoItem />

      <HelmholtzCoilsRadiusInfoItem />
    </SectionWithButton>
  )
}
