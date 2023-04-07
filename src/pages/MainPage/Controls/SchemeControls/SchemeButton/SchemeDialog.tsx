import React from 'react'
import { useTranslate } from '@languages'
import C_V_scheme from 'src/assets/C_V_scheme.svg'
import AG_HC_scheme from 'src/assets/AG_HC_scheme.svg'
import {
  Stack,
  Button,
  Dialog,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'

type Props = {
  isOpen: boolean
  onClose: () => void
}

export const SchemeDialog = ({ isOpen, onClose }: Props) => {
  const translate = useTranslate('SchemeDialog')

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>{translate('title')}</DialogTitle>

      <DialogContent>
        <Stack direction='row' spacing={2}>
          <Stack alignItems='center'>
            <img width={300} height={300} src={AG_HC_scheme} />

            <Typography>Схема подключения 1</Typography>
          </Stack>

          <Stack alignItems='center'>
            <img width={300} height={300} src={C_V_scheme} />

            <Typography>Схема подключения 2</Typography>
          </Stack>
        </Stack>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>{translate('okButton')}</Button>
      </DialogActions>
    </Dialog>
  )
}
