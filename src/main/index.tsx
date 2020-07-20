import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import * as serviceWorker from 'serviceWorker';

import store from 'main/store/configureStore';
import Dashboard from 'modules/Dashboard/DashboardContainer';

ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
