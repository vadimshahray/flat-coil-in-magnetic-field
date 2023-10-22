import React from 'react'
import { useTranslate } from '@languages'
import { CS_HC_scheme, FS_OSC_scheme } from '@components'
import {
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@mui/material'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const SchemeDialog = ({ isOpen, onClose }: Props) => {
  const translate = useTranslate('SchemeDialog')

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth='lg'>
      <DialogTitle>{translate('title')}</DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <Stack direction='row' spacing={3}>
            <CS_HC_scheme />

            <Typography>
              <b>{translate('CS_HC_schemeTitle')}</b>

              <br />
              <br />

              {translate('CS_HC_schemeDescription')}
            </Typography>
          </Stack>

          <Stack direction='row' spacing={3}>
            <FS_OSC_scheme />

            <Typography>
              <b>{translate('FC_OSC_schemeTitle')}</b>

              <br />
              <br />

              {translate('FC_OSC_schemeDescription')}
            </Typography>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{translate('okButton')}</Button>
      </DialogActions>
    </Dialog>
  )
}
