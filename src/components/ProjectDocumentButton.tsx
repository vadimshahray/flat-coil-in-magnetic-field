import React from 'react'
import { useTranslate } from '@languages'
import { IconButton, Tooltip } from '@mui/material'
import { TextSnippetOutlined } from '@mui/icons-material'
import ProjectDocumentPath from '../assets/alternator.pdf'

export const ProjectDocumentButton = () => {
  const translate = useTranslate('ProjectDocumentButton')

  return (
    <Tooltip title={translate('downloadDocument')}>
      <a href={ProjectDocumentPath} download style={{ textDecoration: 'none' }}>
        <IconButton>
          <TextSnippetOutlined />
        </IconButton>
      </a>
    </Tooltip>
  )
}
