import { useTranslate } from '@languages'
import NSTULogoPath from 'src/assets/nstu.svg'
import React, { useState, useEffect, useCallback } from 'react'
import { Backdrop, Fade, Paper, Stack, Typography } from '@mui/material'

type Props = {
  onClose: () => void
}

export const SplashScreen = ({ onClose }: Props) => {
  const translate = useTranslate('SplashScreen')

  const [show, setShow] = useState(true)

  const hide = useCallback(() => {
    setShow(false)

    onClose()
  }, [onClose])

  useEffect(() => {
    const timer = setTimeout(hide, 7 * 1000)

    return () => clearTimeout(timer)
  }, [hide])

  useEffect(() => {
    window.addEventListener('keypress', hide)

    return () => window.removeEventListener('keypress', hide)
  }, [hide])

  useEffect(() => {
    document.title = translate('projectName')
  }, [translate])

  return (
    <Fade in={show}>
      <Backdrop open sx={{ zIndex: 10000 }} onClick={hide}>
        <Paper elevation={0} sx={{ borderRadius: 0, padding: 4, paddingX: 10 }}>
          <Stack spacing={9} alignItems='center'>
            <Stack direction='row' spacing={1.5} alignItems='center'>
              <img src={NSTULogoPath} width={60} height={60} />

              <Typography variant='h5' component='pre'>
                {translate('NSTU')}
              </Typography>
            </Stack>

            <Typography variant='h3'>{translate('projectName')}</Typography>

            <Stack
              direction='row'
              spacing={1.5}
              justifyContent='space-between'
              alignSelf='stretch'
            >
              <Typography variant='h6' component='pre'>
                {translate('students')}
              </Typography>

              <Typography variant='h6'>{translate('supervisor')}</Typography>
            </Stack>

            <Typography variant='body1'> {translate('year')}</Typography>
          </Stack>
        </Paper>
      </Backdrop>
    </Fade>
  )
}
