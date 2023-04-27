import { Vector3 } from 'three'
import { TABLE_TOP } from './scene'

const WIRE_TOP = TABLE_TOP + 2

export const SCHEME_CONNECTIONS: Record<SchemeConnection, WireConnection> = {
  'Coil+Voltmeter+': { terminal1: 'Coil+', terminal2: 'Voltmeter+' },
  'Coil-Voltmeter-': { terminal1: 'Coil-', terminal2: 'Voltmeter-' },
  'CurrentSource+HelmholtzCoils+': {
    terminal1: 'CurrentSource+',
    terminal2: 'HelmholtzCoils+',
  },
  'CurrentSource-HelmholtzCoils-': {
    terminal1: 'CurrentSource-',
    terminal2: 'HelmholtzCoils-',
  },
}

export const ALL_SCHEME_CONNECTIONS: (WireConnection & {
  points: Vector3[]
})[] = [
  // Coil+ -- Voltmeter+
  {
    terminal1: 'Coil+',
    terminal2: 'Voltmeter+',
    points: [
      new Vector3(100, WIRE_TOP + 160, -80),
      new Vector3(120, WIRE_TOP + 160, -80),
      new Vector3(122, WIRE_TOP + 150, -78),
      new Vector3(119, WIRE_TOP + 130, -75),
      new Vector3(118, WIRE_TOP + 110, -70),
      new Vector3(118, WIRE_TOP + 100, -66),
      new Vector3(112, WIRE_TOP + 80, -33),
      new Vector3(118, WIRE_TOP + 70, -20),
      new Vector3(118, WIRE_TOP + 68, -19),
      new Vector3(124, WIRE_TOP + 59, -12),
      new Vector3(134, WIRE_TOP + 50, 7),
      new Vector3(148, WIRE_TOP + 46, 18),
      new Vector3(154, WIRE_TOP + 30, 30),
      new Vector3(159, WIRE_TOP + 26, 34),
      new Vector3(164, WIRE_TOP + 16, 34),
      new Vector3(174, WIRE_TOP + 9, 40),
      new Vector3(177, WIRE_TOP + 7, 44),
      new Vector3(180, WIRE_TOP + 4, 48),
      new Vector3(183, WIRE_TOP + 4, 50),
      new Vector3(186, WIRE_TOP + 3, 54),
      new Vector3(190, WIRE_TOP + 3, 57),
      new Vector3(194, WIRE_TOP + 3, 60),
      new Vector3(199, WIRE_TOP + 2, 64),
      new Vector3(206, WIRE_TOP + 2, 68),
      new Vector3(206, WIRE_TOP + 1, 68),
      new Vector3(246, WIRE_TOP + 1, 100),
      new Vector3(256, WIRE_TOP + 0, 130),
      new Vector3(262, WIRE_TOP + 0, 140),
      new Vector3(270, WIRE_TOP + 3, 150),
      new Vector3(270, WIRE_TOP + 3, 150),
      new Vector3(280, WIRE_TOP + 4, 170),
    ],
  },
  // Coil- -- Voltmeter-
  {
    terminal1: 'Coil-',
    terminal2: 'Voltmeter-',
    points: [
      new Vector3(-104, WIRE_TOP + 160, -80),
      new Vector3(-114, WIRE_TOP + 158, -80),
      new Vector3(-114, WIRE_TOP + 152, -76),
      new Vector3(-110, WIRE_TOP + 138, -66),
      new Vector3(-110, WIRE_TOP + 122, -46),
      new Vector3(-104, WIRE_TOP + 92, -26),
      new Vector3(-95, WIRE_TOP + 72, -10),
      new Vector3(-95, WIRE_TOP + 42, -2),
      new Vector3(-95, WIRE_TOP + 12, 7),
      new Vector3(-96, WIRE_TOP + 4, 10),
      new Vector3(-90, WIRE_TOP + 1, 30),
      new Vector3(-80, WIRE_TOP + 1, 36),
      new Vector3(-50, WIRE_TOP + 1, 42),
      new Vector3(-30, WIRE_TOP + 1, 47),
      new Vector3(20, WIRE_TOP + 1, 50),
      new Vector3(60, WIRE_TOP + 1, 53),
      new Vector3(130, WIRE_TOP + 1, 53),
      new Vector3(150, WIRE_TOP + 1, 54),
      new Vector3(160, WIRE_TOP + 1, 60),
      new Vector3(170, WIRE_TOP + 1, 80),
      new Vector3(177, WIRE_TOP + 1, 100),
      new Vector3(178, WIRE_TOP + 1, 120),
      new Vector3(180, WIRE_TOP + 1, 140),
      new Vector3(204, WIRE_TOP + 4, 170),
    ],
  },
  // CurrentSource+ -- HelmholtzCoils+
  {
    terminal1: 'CurrentSource+',
    terminal2: 'HelmholtzCoils+',
    points: [
      new Vector3(-378, WIRE_TOP + 70, 220),
      new Vector3(-378, WIRE_TOP + 70, 237),
      new Vector3(-375, WIRE_TOP + 40, 237),
      new Vector3(-360, WIRE_TOP + 17, 237),
      new Vector3(-340, WIRE_TOP + 2, 230),
      new Vector3(-290, WIRE_TOP + 0, 227),
      new Vector3(-250, WIRE_TOP + 0, 220),
      new Vector3(-210, WIRE_TOP + 0, 210),
      new Vector3(-170, WIRE_TOP + 0, 202),
      new Vector3(-140, WIRE_TOP + 0, 190),
      new Vector3(-100, WIRE_TOP + 0, 166),
      new Vector3(-88, WIRE_TOP + 2, 147),
      new Vector3(-80, WIRE_TOP + 6, 136),
      new Vector3(-66, WIRE_TOP + 15, 128),
      new Vector3(-62, WIRE_TOP + 37, 100),
      new Vector3(-62, WIRE_TOP + 37, 78),
    ],
  },
  // CurrentSource- -- HelmholtzCoils-
  {
    terminal1: 'CurrentSource-',
    terminal2: 'HelmholtzCoils-',
    points: [
      new Vector3(-334, WIRE_TOP + 70, 190),
      new Vector3(-320, WIRE_TOP + 70, 212),
      new Vector3(-316, WIRE_TOP + 40, 215),
      new Vector3(-290, WIRE_TOP + 10, 218),
      new Vector3(-250, WIRE_TOP + 2, 200),
      new Vector3(-210, WIRE_TOP + 2, 170),
      new Vector3(-190, WIRE_TOP + 2, 160),
      new Vector3(-150, WIRE_TOP + 2, 140),
      new Vector3(-100, WIRE_TOP + 2, 130),
      new Vector3(-50, WIRE_TOP + 2, 132),
      new Vector3(44, WIRE_TOP + 6, 136),
      new Vector3(64, WIRE_TOP + 15, 128),
      new Vector3(62, WIRE_TOP + 37, 100),
      new Vector3(62, WIRE_TOP + 37, 78),
    ],
  },
  //Coil+ -- Coil-
  {
    terminal1: 'Coil+',
    terminal2: 'Coil-',
    points: [
      new Vector3(100, WIRE_TOP + 160, -80),
      new Vector3(120, WIRE_TOP + 160, -80),
      new Vector3(106, WIRE_TOP + 74, -42),

      new Vector3(50, WIRE_TOP + 73, -38),
      new Vector3(0, WIRE_TOP + 72, -32),
      new Vector3(-50, WIRE_TOP + 73, -36),

      new Vector3(-106, WIRE_TOP + 74, -50),
      new Vector3(-120, WIRE_TOP + 160, -80),
      new Vector3(-100, WIRE_TOP + 160, -80),
    ],
  },
  // HelmholtzCoils+ -- HelmholtzCoils-
  {
    terminal1: 'HelmholtzCoils+',
    terminal2: 'HelmholtzCoils-',
    points: [
      new Vector3(61, WIRE_TOP + 36, 75),
      new Vector3(61, WIRE_TOP + 37, 100),
      new Vector3(61, WIRE_TOP + 33, 120),
      new Vector3(78, WIRE_TOP + 6, 170),

      new Vector3(30, WIRE_TOP + 0, 250),
      new Vector3(0, WIRE_TOP + 0, 260),
      new Vector3(-30, WIRE_TOP + 0, 250),

      new Vector3(-78, WIRE_TOP + 6, 170),
      new Vector3(-61, WIRE_TOP + 33, 120),
      new Vector3(-61, WIRE_TOP + 37, 100),
      new Vector3(-61, WIRE_TOP + 36, 75),
    ],
  },
  // CurrentSource+ -- CurrentSource-
  {
    terminal1: 'CurrentSource+',
    terminal2: 'CurrentSource-',
    points: [
      new Vector3(-441, WIRE_TOP + 71, 205),
      new Vector3(-441, WIRE_TOP + 71, 235),
      new Vector3(-441, WIRE_TOP + 65, 239),
      new Vector3(-441, WIRE_TOP + 10, 246),

      new Vector3(-386, WIRE_TOP + 10, 246),
      new Vector3(-386, WIRE_TOP + 65, 239),
      new Vector3(-386, WIRE_TOP + 71, 235),
      new Vector3(-386, WIRE_TOP + 71, 205),
    ],
  },
]
