import React, { Fragment, useState, useEffect } from 'react'
import { ReactComponent as Logo } from './studiofarg.svg';
import { SocialMedia } from './SocialMedia';
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

export const Welcome = () => {
  return (
    <Fragment>
      <Logo width='100%'/>
      <SocialMedia/>
      <Typography>Hello! My name is Sandra. Welcome to my little corner of the internet. Here I have gathered links to all of my social media accounts and information about all of my hobby projects.</Typography>
    </Fragment>
  )
}
