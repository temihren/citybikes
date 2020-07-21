import mainReducer from 'main/mainReducer';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {StateType} from 'typesafe-actions';
import {composeWithDevTools} from 'redux-devtools-extension';

import mainSaga from 'main/mainSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	mainReducer,
	composeWithDevTools(
		applyMiddleware(sagaMiddleware)
	)
)

export type IRootState = StateType<typeof mainReducer>;

sagaMiddleware.run(mainSaga);

export default store;