import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Menu } from './components/Menu'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff9100',
    },
    secondary: {
      main: '#F73378',
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  spacing: 8, // Custom spacing (default is 8px)
})

const mainWrapperStyle = { display: 'flex', flexDirection: 'column' }
const centerContentWrapper = { display: 'flex', justifyContent: 'center' }
const contentWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '30rem',
  flexGrow: 1,
}
const MainWrapper = ({ children }) => {
  return (
    <div style={mainWrapperStyle}>
      <div style={centerContentWrapper}>
        <div style={contentWrapperStyle}>{children}</div>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <Menu />
      </MainWrapper>
    </ThemeProvider>
  )
}

export default App