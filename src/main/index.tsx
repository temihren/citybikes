import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Dashboard from 'modules/Dashboard/DashboardContainer';
import store from 'main/store/configureStore';

import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<Dashboard />
	</Provider>,
	document.getElementById('root')
);
