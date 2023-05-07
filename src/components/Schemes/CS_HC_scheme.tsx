import React from 'react'
import { useTheme } from '@mui/material'

export const CS_HC_scheme = () => {
  const color = useTheme().palette.text.primary

  return (
    <svg width='202px' height='167px' viewBox='-0.5 -0.5 202 167'>
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
        <path d='M 94.74 165 L 94.74 125' fill='none' stroke={color} />
        <path d='M 105.37 155 L 105.37 135' fill='none' stroke={color} />
        <g transform='translate(-0.5 -0.5)'>
          <text x='83' y='124' fill={color} fontSize='12px' textAnchor='middle'>
            +
          </text>
        </g>
        <g transform='translate(-0.5 -0.5)'>
          <text
            x='110'
            y='124'
            fill={color}
            fontSize='12px'
            textAnchor='middle'
          >
            -
          </text>
        </g>
        <path
          d='M 116.69 54.34 C 110.89 54.48 105.42 52.6 102.47 49.43 C 99.51 46.26 99.54 42.32 102.55 39.17 C 105.55 36.02 111.05 34.17 116.85 34.36'
          fill='none'
          stroke={color}
          transform='rotate(89,116.06,44.34)'
        />
        <path
          d='M 137.84 54.34 C 132.04 54.48 126.57 52.6 123.62 49.43 C 120.66 46.26 120.69 42.32 123.7 39.17 C 126.7 36.02 132.2 34.17 138 34.36'
          fill='none'
          stroke={color}
          transform='rotate(89,137.21,44.34)'
        />
        <path
          d='M 158.89 54.34 C 153.09 54.48 147.62 52.6 144.67 49.43 C 141.71 46.26 141.74 42.32 144.75 39.17 C 147.75 36.02 153.25 34.17 159.05 34.36'
          fill='none'
          stroke={color}
          transform='rotate(89,158.26,44.34)'
        />
        <path d='M 93.98 44.45 L 106.55 44.67' fill='none' stroke={color} />
        <path
          d='M 31.58 45 L 0 45 L 0 145 L 94.74 145'
          fill='none'
          stroke={color}
        />
        <path
          d='M 167.9 44.33 L 200 44.3 L 200 145 L 105.26 145'
          fill='none'
          stroke={color}
        />
        <path
          d='M 42.58 54.59 C 36.77 54.74 31.31 52.78 28.35 49.48 C 25.4 46.18 25.43 42.07 28.43 38.79 C 31.44 35.51 36.93 33.59 42.74 33.78'
          fill='none'
          stroke={color}
          transform='rotate(89,41.95,44.18)'
        />
        <path
          d='M 64.16 54.17 C 58.35 54.31 52.89 52.43 49.93 49.26 C 46.98 46.09 47.01 42.15 50.01 39 C 53.02 35.85 58.51 34 64.31 34.19'
          fill='none'
          stroke={color}
          transform='rotate(89,63.53,44.17)'
        />
        <path
          d='M 85.21 54.17 C 79.4 54.31 73.94 52.43 70.98 49.26 C 68.03 46.09 68.06 42.15 71.07 39 C 74.07 35.85 79.56 34 85.37 34.19'
          fill='none'
          stroke={color}
          transform='rotate(89,84.58,44.17)'
        />
      </g>
    </svg>
  )
}
