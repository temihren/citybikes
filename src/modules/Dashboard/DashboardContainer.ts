import {connect} from 'react-redux';

import DashboardModule from 'modules/Dashboard/DashboardModule';
import {IRootState} from 'main/store/configureStore';

import {initDashboard} from './dashboardActions';
import {getCurrentNetwork} from './dashboardGetters';

const mapStateToProps = (state: IRootState) => ({
    currentNetwork: getCurrentNetwork(state.dashboard.networks),
});

const mapDispatchToProps = {initDashboard};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardModule);