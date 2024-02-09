import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { BrowserRouter } from 'react-router-dom'

const theme = createTheme({
  /* Inserire il tema mantine scelto qui dentro*/
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme='dark'>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>
)
