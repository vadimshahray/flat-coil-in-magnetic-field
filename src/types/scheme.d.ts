type Terminal =
  | 'Coil+'
  | 'Coil-'
  | 'Oscilloscope+'
  | 'Oscilloscope-'
  | 'HelmholtzCoils+'
  | 'HelmholtzCoils-'
  | 'CurrentSource+'
  | 'CurrentSource-'

type SchemeConnection =
  | 'Coil+Oscilloscope+'
  | 'Coil+Oscilloscope-'
  | 'Coil-Oscilloscope+'
  | 'Coil-Oscilloscope-'
  | 'CurrentSource+HelmholtzCoils+'
  | 'CurrentSource-HelmholtzCoils-'

type WireConnection = { terminal1: Terminal | null; terminal2: Terminal | null }

type Wire = {
  id: number
  color: string
} & WireConnection

type SchemeStatus = 'assembled' | 'disassembled' | 'wrong'
