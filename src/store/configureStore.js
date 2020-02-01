import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import reducers from '@reducers'

export default history => {
  const middlewares = compose(
    applyMiddleware(...[thunk, routerMiddleware(history)])
  )

  const store = createStore(reducers, middlewares)

  let persistor = persistStore(store)

  return { persistor, store }
}
