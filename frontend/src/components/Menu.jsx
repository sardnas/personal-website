import React, { Fragment, useState, useEffect } from 'react'
import { Content } from './Content'
import { Welcome } from './Welcome'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
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
      content: ['This is the content related to The Sims 4.'],
      links: ['The Gallery', 'Custom Content', 'Mods'],
    },
    '0000000002': {
      id: '0000000002',
      title: 'Knitting & Fiber Arts',
      content: ['Here you can find my published patterns etc.'],
      links: ['Patterns', 'Ravelry'],
    },
    '0000000003': {
      id: '0000000003',
      title: 'Coding',
      content: ['I work as a developer.'],
      links: ['GitHub', 'LinkedIn'],
    },
  }
  useEffect(() => {
    setMenuItems(menuContent)
  }, [])
  return (
    <Fragment>
      <Card style={style}>
        <CardContent>
          <Welcome />
          <List>
            {Object.keys(menuItems).map((key) => {
              return (
                <ListItemButton key={key} onClick={() => setActiveItem(key)}>
                  <ListItemIcon>
                    <EmojiEmotionsIcon />
                  </ListItemIcon>
                  <ListItemText primary={menuItems[key].title} />
                </ListItemButton>
              )
            })}
          </List>
          {menuItems[activeItem] && (
            <Content
              key={activeItem}
              content={menuItems[activeItem].content}
              links={menuItems[activeItem].links}
            />
          )}
        </CardContent>
      </Card>
    </Fragment>
  )
}
