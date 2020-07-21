import {all} from 'redux-saga/effects';

import dashboardSaga from 'modules/Dashboard/dashboardSaga';

export default function* rootSaga() {
    yield all([
        dashboardSaga(),
    ])
};
