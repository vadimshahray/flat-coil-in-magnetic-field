import React from 'react'
import { useTheme } from '@mui/material'

export const FS_OSC_scheme = () => {
  const palette = useTheme().palette

  const color = palette.text.primary
  const background = palette.background.paper

  return (
    <svg width='201' height='141' viewBox='-0.5 -0.5 201 141'>
      <g>
        <path
          d='M 0.5 25 L 200.5 25 L 200.5 125 L 0.5 125 L 0.5 25 Z'
          stroke='none'
          fill='transparent'
        />
        <path
          d='M 5.5 30 L 5.5 120 L 5.5 120 L 195.5 120 L 195.5 30 L 5.5 30'
          fill='none'
          stroke='none'
        />
        <path
          d='M 0.5 25 L 200.5 25 L 200.5 125 L 0.5 125 L 0.5 25 Z'
          fill='none'
          stroke={color}
        />
        <ellipse
          cx='100.5'
          cy='25'
          rx='25'
          ry='25'
          stroke={color}
          fill={background}
        />
        <g transform='translate(-0.5 -0.5)'>
          <text x='101' y='29' fill={color} fontSize='12px' textAnchor='middle'>
            OSC
          </text>
        </g>
        <ellipse
          cx='100.5'
          cy='125.5'
          rx='14.5'
          ry='14.5'
          stroke={color}
          fill={background}
        />
        <g transform='translate(-0.5 -0.5)'>
          <text
            x='101'
            y='129'
            fill={color}
            fontSize='12px'
            textAnchor='middle'
          >
            V
          </text>
        </g>
      </g>
    </svg>
  )
}
