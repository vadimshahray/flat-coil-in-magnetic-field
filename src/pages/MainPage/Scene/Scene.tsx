import { Camera } from './Camera'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { DeviceTable } from './DeviceTable'
import { SceneFallback } from './SceneFallback'
import { Stats } from '@react-three/drei'
import { Room } from './Room'

const Blackboard = React.lazy(() => import('src/models/Blackboard'))
const Chair = React.lazy(() => import('src/models/Chair'))
const Lamp = React.lazy(() => import('src/models/Lamp'))
const ProjectorScreen = React.lazy(() => import('src/models/ProjectorScreen'))
const Projector = React.lazy(() => import('src/models/Projector'))
const Sink = React.lazy(() => import('src/models/Sink'))
const Plinth = React.lazy(() => import('src/models/Plinth'))
const Sofa = React.lazy(() => import('src/models/Sofa'))
const Bookshelf = React.lazy(() => import('src/models/Bookshelf'))
const Fan = React.lazy(() => import('src/models/Fan'))
const Window = React.lazy(() => import('src/models/Window'))
const LightSwitch = React.lazy(() => import('src/models/LightSwitch'))
const PowerSocket = React.lazy(() => import('src/models/PowerSocket'))
const ComputerDesk = React.lazy(() => import('src/models/ComputerDesk'))

export const Scene = () => {
  return (
    <Suspense fallback={<SceneFallback />}>
      <Canvas resize={{ debounce: 0 }}>
        <Stats />

        <Camera />

        <Room />

        <ambientLight intensity={0.6} />

        <directionalLight intensity={0.3} position={[300, 600, 200]} />
        <directionalLight intensity={0.3} position={[300, 600, -200]} />

        <directionalLight intensity={0.3} position={[-300, 600, 200]} />
        <directionalLight intensity={0.3} position={[-300, 600, -200]} />

        <DeviceTable />

        {/* <Blackboard />

        <ProjectorScreen />
        <Wall />
        <Window />
        <Sofa />
        <Plinth />
        <Fan />
        <Door />
        <Chair />
        <Lamp />
        <Projector />

        <Bookshelf />
        <ComputerDesk />
        <PowerSocket />
        <LightSwitch />
        <Sink /> */}
      </Canvas>
    </Suspense>
  )
}
