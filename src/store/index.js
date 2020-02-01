import { createBrowserHistory } from 'history';
import configureStore from './configureStore'

const history = createBrowserHistory();

const { store, persistor } = configureStore(history)

export { history, persistor }

export default store
