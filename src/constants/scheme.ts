import { Vector3 } from 'three'

export const SCHEME_CONNECTIONS: Record<SchemeConnection, WireConnection> = {
  'Coil+Voltmeter+': { terminal1: 'Coil+', terminal2: 'Voltmeter+' },
  'Coil-Voltmeter-': { terminal1: 'Coil-', terminal2: 'Voltmeter-' },
  'AmperageGenerator+HelmholtzCoils+': {
    terminal1: 'AmperageGenerator+',
    terminal2: 'HelmholtzCoils+',
  },
  'AmperageGenerator-HelmholtzCoils-': {
    terminal1: 'AmperageGenerator-',
    terminal2: 'HelmholtzCoils-',
  },
}

export const ALL_SCHEME_CONNECTIONS: (WireConnection & {
  points: Vector3[]
})[] = [
  {
    terminal1: 'Coil+',
    terminal2: 'Voltmeter+',
    points: [new Vector3(0, 0, 0), new Vector3(10, 0, 100)],
  },
  {
    terminal1: 'Coil-',
    terminal2: 'Voltmeter-',
    points: [new Vector3(0, 0, 0), new Vector3(10, 0, 100)],
  },
  {
    terminal1: 'AmperageGenerator+',
    terminal2: 'HelmholtzCoils+',
    points: [new Vector3(0, 0, 0), new Vector3(10, 0, 100)],
  },
  {
    terminal1: 'AmperageGenerator-',
    terminal2: 'HelmholtzCoils-',
    points: [new Vector3(0, 0, 0), new Vector3(10, 0, 100)],
  },
]
