import React, { Fragment, useState, useEffect } from 'react'
import { Content } from './Content'
import { Welcome } from './Welcome'
import FavoriteIcon from '@mui/icons-material/Favorite';
import TerminalIcon from '@mui/icons-material/Terminal';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import simshouse from "./simshouse.jpg";
import simsselfie from "./simsselfie.png";
import sweater from "./sweater.webp";
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
      icon: <SportsEsportsIcon/>,
      image: simshouse
    },
    '0000000002': {
      id: '0000000002',
      title: 'Art & crafts',
      content: ['Here you can find my published patterns etc.'],
      links: ['Patterns', 'Ravelry'],
      icon: <FavoriteIcon/>,
      image: sweater
    },
    '0000000003': {
      id: '0000000003',
      title: 'Coding',
      content: ['I work as a developer.'],
      links: ['GitHub', 'LinkedIn'],
      icon: <TerminalIcon/>,
      image: simsselfie
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
                    {menuItems[key].icon}
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
              image={menuItems[activeItem].image}
              title={menuItems[activeItem].title}
            />
          )}
          <Typography style={{marginTop:'1rem'}} color='#ac4c79'>You can contact me at: sandra@studiofarg.com</Typography>
        </CardContent>
        
      </Card>
    </Fragment>
  )
}
