import {combineReducers} from 'redux';
import networksReducer from 'modules/Dashboard/dashboardFrames/NetworksFrame/networksReducer';
import stationsReducer from 'modules/Dashboard/dashboardFrames/StationsFrame/stationsReducer';

export default combineReducers({
    networks: networksReducer,
    stations: stationsReducer,
});
