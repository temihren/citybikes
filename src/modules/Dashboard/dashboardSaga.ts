import {all, takeLatest, put, call} from 'redux-saga/effects';
import dashboardActionTypes from './dashboardConstants';

import * as networksActions from './dashboardFrames/NetworksFrame/networksActions';
import stationsSaga from 'modules/Dashboard/dashboardFrames/StationsFrame/stationsSaga';
import {requestStations} from './dashboardFrames/StationsFrame/stationsActions';
import {networksRequest} from 'library/api/networksApi';
import removeArrayItemsDuplicates from 'library/common/utilities/removeArrayItemsDuplicates';

function* initDashboardSaga() {
    const networksResponse = yield call(networksRequest);
    yield put(networksActions.requestNetworksSuccess(
        removeArrayItemsDuplicates(networksResponse.data.networks)
    ));
    yield put(requestStations(networksResponse.data.networks[0]));
};

function* watchDashboard() {
    yield takeLatest(dashboardActionTypes.INIT_DASHBOARD, initDashboardSaga);
};

export default function* rootSaga() {
    yield all([
        stationsSaga(),
        watchDashboard(),
    ]);
};
