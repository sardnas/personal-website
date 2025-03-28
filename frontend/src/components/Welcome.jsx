import React, { Fragment, useState, useEffect } from 'react'
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
      <Typography variant='h2' color='secondary'>
        Welcome
      </Typography>
      <Typography>TODO: links to social media pages and a logo.</Typography>
    </Fragment>
  )
}
