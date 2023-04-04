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
