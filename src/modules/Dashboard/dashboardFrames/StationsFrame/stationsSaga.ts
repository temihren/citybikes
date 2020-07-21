import {takeLatest, call, put} from 'redux-saga/effects';

import {stationsRequest} from 'library/api/stationsApi';

import stationActionTypes from './stationsConstants';
import * as stationsActions from './stationsActions';
import * as networkActions from '../NetworksFrame/networksActions';

function* requestStationsSaga(action: ReturnType<typeof stationsActions.requestStations>) {
    try {
        const stationsResponse = yield call(stationsRequest, action.network.id);
        yield put(networkActions.selectNetwork(action.network));
        if (stationsResponse.data && stationsResponse.data.network && stationsResponse.data.network.stations) {
            yield put(stationsActions.requestStationsSuccess(stationsResponse.data.network.stations));
        }
    } catch (error) {
        yield put(stationsActions.requestStationsError());
    }
}

function* toggleStationLikeSaga(action: ReturnType<typeof stationsActions.toggleStationLike>) {
    yield put(stationsActions.toggleStationLikeSuccess(action.id));
}

export default function* watchStations() {
    yield takeLatest(stationActionTypes.REQUEST_STATIONS, requestStationsSaga);
    yield takeLatest(stationActionTypes.TOGGLE_STATION_LIKE, toggleStationLikeSaga);
};
