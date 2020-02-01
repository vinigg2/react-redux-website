import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { Route, Switch } from 'react-router'
import { replace } from 'react-router-redux'
import { ConnectedRouter } from 'react-router-redux'

import store, { persistor, history } from '@store'
import { logout } from '@actions/auth'

// Template
import Root from './Root'

// Pages
import Home from '@pages/Home'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ConnectedRouter history={history}>
        <Root>
          <Switch>
            <Route exact={true} path="/" component={Home} />
          </Switch>
        </Root>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)