import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import { TextSnippetOutlined } from '@mui/icons-material'

export const ProjectDocumentButton = () => {
  return (
    <Tooltip title='Скачать отчет'>
      <a
        href={process.env.PUBLIC_URL + '/docs/alternator.pdf'}
        download
        style={{ textDecoration: 'none' }}
      >
        <IconButton>
          <TextSnippetOutlined />
        </IconButton>
      </a>
    </Tooltip>
  )
}
