import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

/* Chakra UI */
// import { baseTheme } from '@chakra-ui/theme'
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "@chakra-ui/react/provider"

const theme = extendTheme({  })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider theme={theme}>
        <App />
    </Provider>
  </StrictMode>,
)
