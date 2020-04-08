import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Router } from 'react-router-dom' 
import { ThemeProvider } from 'styled-components'

import Routes from './routes'
import history from './services/history'
import { store, persistor } from './store'
import GlobalStyle from './styles/global'
import Theme from './styles/global/theme'
 
export default function App() {
  return <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={Theme}>
          <Router history={history}>
            <Routes /> 
            <GlobalStyle /> 
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </>
} 
