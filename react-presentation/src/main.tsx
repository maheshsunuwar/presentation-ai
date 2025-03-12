import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/App.tsx'
import { ReactDom } from 'react-dom'

/* Chakra UI */
// import { baseTheme } from '@chakra-ui/theme'
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// import { Provider } from "@chakra-ui/react/provider"

const theme = extendTheme({  })

createRoot(document.getElementById('root')!).render(
// ReactDom.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
  </StrictMode>,
//   document.getElementById('root')
)
