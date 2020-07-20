import {createAction} from 'typesafe-actions';
import dashboardActionTypes from './dashboardConstants';

export const initDashboard = createAction(dashboardActionTypes.INIT_DASHBOARD)();
