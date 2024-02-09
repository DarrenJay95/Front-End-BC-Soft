import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'

const theme = createTheme({
  /* Inserire il tema mantine scelto qui dentro*/
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </MantineProvider>
)
