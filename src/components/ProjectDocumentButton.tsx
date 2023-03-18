import React from 'react'
import { useTranslate } from '@languages'
import { IconButton, Tooltip } from '@mui/material'
import { TextSnippetOutlined } from '@mui/icons-material'

export const ProjectDocumentButton = () => {
  const translate = useTranslate('ProjectDocumentButton')

  return (
    <Tooltip title={translate('downloadDocument')}>
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
