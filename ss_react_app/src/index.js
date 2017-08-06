import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
// import routes from './routes';
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import history from './stores/history'
import Layout from './components/Layout'
// import '../public/skeleton.css'

const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();