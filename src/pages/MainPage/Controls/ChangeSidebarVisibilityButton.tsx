import React from 'react'
import { useDispatch } from '@hooks'
import { useSelector } from 'react-redux'
import { useTranslate } from '@languages'
import { setIsSidebarVisible } from '@slices'
import { IconButton, Paper, Tooltip } from '@mui/material'
import { selectIsSidebarVisible } from '@selectors'
import { KeyboardArrowRightOutlined, MenuOutlined } from '@mui/icons-material'

export const ChangeSidebarVisibilityButton = () => {
  const dispatch = useDispatch()
  const translate = useTranslate('ChangeSidebarVisibilityButton')

  const isSidebarVisible = useSelector(selectIsSidebarVisible)

  const handleClick = () => {
    dispatch(setIsSidebarVisible(!isSidebarVisible))
  }

  return (
    <Paper sx={{ borderRadius: 50 }}>
      <Tooltip
        title={translate(isSidebarVisible ? 'hideSidebar' : 'showSidebar')}
      >
        <IconButton onClick={handleClick}>
          {isSidebarVisible ? <KeyboardArrowRightOutlined /> : <MenuOutlined />}
        </IconButton>
      </Tooltip>
    </Paper>
  )
}
