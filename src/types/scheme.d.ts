type Terminal =
  | 'Coil+'
  | 'Coil-'
  | 'Voltmeter+'
  | 'Voltmeter-'
  | 'HelmholtzCoils+'
  | 'HelmholtzCoils-'
  | 'AmperageGenerator+'
  | 'AmperageGenerator-'

type SchemeConnection =
  | 'Coil+Voltmeter+'
  | 'Coil-Voltmeter-'
  | 'AmperageGenerator+HelmholtzCoils+'
  | 'AmperageGenerator-HelmholtzCoils-'

type WireConnection = { terminal1: Terminal | null; terminal2: Terminal | null }

type Wire = {
  id: number
  color: string
} & WireConnection

type SchemeStatus = 'assembled' | 'disassembled' | 'wrong'
