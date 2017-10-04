import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './stores/configureStore'
// import routes from './routes';
import { ConnectedRouter } from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import history from './stores/history'
import 'bootstrap/dist/css/bootstrap.css'


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