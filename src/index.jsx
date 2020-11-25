import React from 'react'
import ReactDOM from 'react-dom'

import { ChakraProvider } from '@chakra-ui/react'

import App from './App'

import uiTheme from './styles/uiTheme'

// NOTE: styles;
import './styles/fontOverrides.css'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={uiTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
