import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

import auth from './auth'
import users from './users'
import pts from './pts'

const reducer = (key, obj) =>
  persistReducer(
    {
      storage,
      key,
      blacklist: [
        'loading',
        'error',
        'email',
        'result',
        'submitting',
        'deleting',
        'cancelling',
        'fetching',
        'error',
        'success',
        'byId',
        'autoRechargeSubmitting',
        'autoRechargeError',
        'autoRechargeSuccess',
        'fetchingZip',
      ],
    },
    obj
  )

export default combineReducers({
  router: routerReducer,
  form: reduxFormReducer,
  auth: reducer('auth', auth),
  users: reducer('users', users),
  pts: reducer('pts', pts)
})
