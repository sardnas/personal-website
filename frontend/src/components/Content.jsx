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
  ButtonGroup,
  Button,
} from '@mui/material'

export const Content = ({ content, links }) => {
  return (
    <Fragment>
      <Typography>{content}</Typography>
      <ButtonGroup variant='text' aria-label='Basic button group'>
        {Object.keys(links).map((key) => {
                    return <Button key={key}>{links[key]}</Button>
                  })}
      </ButtonGroup>
    </Fragment>
  )
}
