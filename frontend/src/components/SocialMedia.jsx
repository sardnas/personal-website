import React, { Fragment, useState, useEffect } from 'react'
import { ReactComponent as TikTok } from './tiktok.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Pinterest } from './pinterest.svg';
import { ReactComponent as Ravelry } from './ravelry.svg';
import { ReactComponent as Github } from './github.svg';
const style = {
    display: 'flex',
    justifyContent: 'space-evenly',
    width:'100%',
    height:'3rem',
    marginBottom:'1rem'
  };

export const SocialMedia = () => {
    return (
      <div style={style}>
        <TikTok/>
        <Pinterest/>
        <Github/>
        <Instagram/>
        <Ravelry/>
        </div>
    )
  }