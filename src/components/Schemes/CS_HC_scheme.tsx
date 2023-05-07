import React from 'react'
import { useTheme } from '@mui/material'

export const CS_HC_scheme = () => {
  const color = useTheme().palette.text.primary

  return (
    <svg width='192' height='167' viewBox='-0.5 -0.5 192 167'>
      <g>
        <rect x='40' y='0' width='40' height='30' fill='none' stroke='none' />
        <g transform='translate(-0.5 -0.5)'>
          <text x='60' y='19' fill={color} fontSize='12px' textAnchor='middle'>
            L1
          </text>
        </g>
        <rect
          x='110.3'
          y='0'
          width='40'
          height='30'
          fill='none'
          stroke='none'
        />
        <g transform='translate(-0.5 -0.5)'>
          <text x='130' y='19' fill={color} fontSize='12px' textAnchor='middle'>
            L2
          </text>
        </g>
        <path d='M 90 165 L 90 125' fill='none' stroke={color} />
        <path d='M 100.1 155 L 100.1 135' fill='none' stroke={color} />
        <rect x='65' y='105' width='30' height='30' fill='none' stroke='none' />
        <g transform='translate(-0.5 -0.5)'>
          <text x='80' y='124' fill={color} fontSize='12px' textAnchor='middle'>
            +
          </text>
        </g>
        <rect x='90' y='105' width='30' height='30' fill='none' stroke='none' />
        <g transform='translate(-0.5 -0.5)'>
          <text
            x='105'
            y='124'
            fill={color}
            fontSize='12px'
            textAnchor='middle'
          >
            -
          </text>
        </g>
        <path
          d='M 110.86 54.33 C 105.34 54.48 100.15 52.59 97.35 49.43 C 94.54 46.26 94.57 42.32 97.42 39.17 C 100.28 36.02 105.5 34.17 111.01 34.35'
          fill='none'
          stroke={color}
          transform='rotate(89,110.26,44.34)'
        />
        <path
          d='M 130.95 54.33 C 125.43 54.48 120.24 52.59 117.44 49.43 C 114.63 46.26 114.66 42.32 117.51 39.17 C 120.37 36.02 125.59 34.17 131.1 34.35'
          fill='none'
          stroke={color}
          transform='rotate(89,130.35,44.34)'
        />
        <path
          d='M 150.95 54.33 C 145.43 54.48 140.24 52.59 137.44 49.43 C 134.63 46.26 134.66 42.32 137.51 39.17 C 140.37 36.02 145.59 34.17 151.1 34.35'
          fill='none'
          stroke={color}
          transform='rotate(89,150.35,44.34)'
        />
        <path d='M 89.76 44.43 L 100.74 44.66' fill='none' stroke={color} />
        <path d='M 30 45 L 0 45 L 0 145 L 90 145' fill='none' stroke={color} />
        <path
          d='M 159.99 44.32 L 190 44.29 L 190 145 L 100 145'
          fill='none'
          stroke={color}
        />
        <path
          d='M 40.45 54.58 C 34.93 54.73 29.74 52.77 26.94 49.47 C 24.13 46.17 24.16 42.07 27.01 38.79 C 29.87 35.51 35.09 33.58 40.6 33.77'
          fill='none'
          stroke={color}
          transform='rotate(89,39.85,44.18)'
        />
        <path
          d='M 60.95 54.16 C 55.43 54.31 50.24 52.42 47.44 49.26 C 44.63 46.09 44.66 42.15 47.51 39 C 50.37 35.85 55.59 34 61.1 34.18'
          fill='none'
          stroke={color}
          transform='rotate(89,60.35,44.17)'
        />
        <path
          d='M 80.95 54.16 C 75.43 54.31 70.24 52.42 67.44 49.26 C 64.63 46.09 64.66 42.15 67.51 39 C 70.37 35.85 75.59 34 81.1 34.18'
          fill='none'
          stroke={color}
          transform='rotate(89,80.35,44.17)'
        />
      </g>
    </svg>
  )
}
