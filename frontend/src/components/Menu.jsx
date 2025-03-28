import React, { Fragment, useState, useEffect } from 'react'
import { Content } from './Content'
import { Welcome } from './Welcome'
import {
  Container,
  Card,
  CardContent,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
} from '@mui/material'

export const Menu = ({ style }) => {
  const [menuItems, setMenuItems] = useState({})
  const [activeItem, setActiveItem] = useState()
  const menuContent = {
    '0000000001': {
      id: '0000000001',
      title: 'The Sims 4',
      content: ['Something 1'],
    },
    '0000000002': {
      id: '0000000002',
      title: 'Knitting & Fiber Arts',
      content: ['Something 2'],
    },
  }
  useEffect(() => {
    setMenuItems(menuContent)
  }, [])
  return (
    <Fragment>
      <Card style={style}>
        <Welcome />
        <List>
          {Object.keys(menuItems).map((key) => {
            return (
              <ListItemButton key={key} onClick={() => setActiveItem(key)}>
                <ListItemIcon>Icon</ListItemIcon>
                <ListItemText primary={menuItems[key].title} />
              </ListItemButton>
            )
          })}
        </List>
        {menuItems[activeItem] && (
          <Content 
          key={activeItem} 
          content={menuItems[activeItem].content} />
        )}
      </Card>
    </Fragment>
  )
}
