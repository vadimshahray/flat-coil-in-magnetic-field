import { useMediaQuery, useTheme } from '@mui/material'

export const useDeviceTypeValue = <D, M>(
  desktopValue: D,
  mobileValue: M,
): D | M => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))

  return isDesktop ? desktopValue : mobileValue
}
