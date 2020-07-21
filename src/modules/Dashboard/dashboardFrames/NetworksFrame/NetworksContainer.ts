import {connect} from 'react-redux';
import {IRootState} from 'main/store/configureStore';
import {requestNetworks} from 'modules/Dashboard/dashboardFrames/NetworksFrame/networksActions';
import {requestStations} from 'modules/Dashboard/dashboardFrames/StationsFrame/stationsActions';

import Networks from './NetworksFrame';
import {getNetworksList, getNetworksLoading} from './networksGetters';

const mapStateToProps = (state: IRootState) => ({
    networks: getNetworksList(state.dashboard.networks),
    loading: getNetworksLoading(state.dashboard.networks),
});

const mapDispatchToProps = {
    requestNetworks,
    requestStations,
}

export default connect(
    mapStateToProps, mapDispatchToProps,
)(Networks);