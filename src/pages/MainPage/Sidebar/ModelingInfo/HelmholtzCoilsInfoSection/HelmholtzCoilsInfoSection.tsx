import React from 'react'
import { useTranslate } from '@languages'
import { SectionWithButton } from '@components'
import { ViewHelmholtzCoilsButton } from './ViewHelmholtzCoilsButton'

export const HelmholtzCoilsInfoSection = () => {
  const translate = useTranslate('HelmholtzCoilsInfoSection')

  return (
    <SectionWithButton
      title={translate('title')}
      Button={<ViewHelmholtzCoilsButton />}
    ></SectionWithButton>
  )
}
