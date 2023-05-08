type Terminal =
  | 'Coil+'
  | 'Coil-'
  | 'Voltmeter+'
  | 'Voltmeter-'
  | 'Oscilloscope+'
  | 'Oscilloscope-'
  | 'HelmholtzCoils+'
  | 'HelmholtzCoils-'
  | 'CurrentSource+'
  | 'CurrentSource-'

type SchemeConnection =
  | 'Coil+Voltmeter+'
  | 'Coil-Voltmeter-'
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
