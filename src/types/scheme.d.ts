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

type WireConnection = { terminal1: Terminal; terminal2: Terminal }

type Wire = {
  id: number
  color: string

  terminal1: Terminal | null
  terminal2: Terminal | null
}

type SchemeStatus = 'assembled' | 'disassembled' | 'wrong'
