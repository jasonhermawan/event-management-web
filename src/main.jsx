import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { globalState } from './redux/reducer/index.js'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={globalState}>
    <BrowserRouter>
    <ChakraProvider>
      <App />
  </ChakraProvider>
    </BrowserRouter>
  </Provider>
)
