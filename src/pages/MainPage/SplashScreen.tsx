import { useTranslate } from '@languages'
import NSTULogoPath from 'src/assets/nstu.svg'
import React, { useState, useEffect } from 'react'
import { Backdrop, Fade, Paper, Stack, Typography } from '@mui/material'

export const SplashScreen = () => {
  const translate = useTranslate('SplashScreen')

  const [show, setShow] = useState(true)

  const handleBackdropClick = () => {
    setShow(false)
  }

  useEffect(() => {
    setTimeout(setShow, 7 * 1000, false)
  }, [])

  return (
    <Fade in={show}>
      <Backdrop open sx={{ zIndex: 10000 }} onClick={handleBackdropClick}>
        <Paper elevation={0} sx={{ borderRadius: 0, padding: 4, paddingX: 10 }}>
          <Stack spacing={9} alignItems='center'>
            <Stack direction='row' spacing={1.5} alignItems='center'>
              <img src={NSTULogoPath} width={40} height={40} />

              <Typography variant='h6' fontSize={16}>
                Новосибирский Государственный
                <br />
                Технический Университет
              </Typography>
            </Stack>

            <Typography variant='h3'>
              Название проекта название проекта название
            </Typography>

            <Stack
              direction='row'
              spacing={1.5}
              justifyContent='space-between'
              alignSelf='stretch'
            >
              <Typography variant='body1' component='pre'>
                {`Факультет: ПМИ\nВыполнили: Шахрай Вадим, ПМ-15\n\t\t   Зуев Андрей, ПМ-15\n\t\t   Мироненко Алиса, ПМИ-11`}
              </Typography>

              <Typography variant='body1'>
                Руководитель: Баранов А. В.
              </Typography>
            </Stack>

            <Typography variant='caption'>2023 год</Typography>
          </Stack>
        </Paper>
      </Backdrop>
    </Fade>
  )
}
