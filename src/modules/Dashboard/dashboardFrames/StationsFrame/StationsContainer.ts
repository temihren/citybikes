import {connect} from 'react-redux';
import {IRootState} from 'main/store/configureStore';

import Stations from './StationsFrame';
import {getStationsList, getStationsLoading, getLikedStations} from './stationsGetters';
import {requestStations, toggleStationLike} from './stationsActions';

const mapStateToProps = (state: IRootState) => ({
    stations: getStationsList(state.dashboard.stations),
    loading: getStationsLoading(state.dashboard.stations),
    likedStations: getLikedStations(state.dashboard.stations),
});

const mapDispatchToProps = {
    requestStations,
    toggleStationLike,
}

export default connect(
    mapStateToProps, mapDispatchToProps,
)(Stations);