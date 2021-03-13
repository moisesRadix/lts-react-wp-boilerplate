import * as actionName from "./actions";
import initialState from "./initialState";
// import { actions } from 'react-table';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_CLIENT_BROWSER_INFO:
      return {
        ...state,
        browserInfo: action.payload,
      };
    case actionName.SET_VIEW_TITLE:
      return {
        ...state,
        viewTitle: action.payload,
      };
    case actionName.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case actionName.SET_USER_ACCESS:
      return {
        ...state,
        access: action.payload,
      };
    case actionName.SET_USER_ORGANIZATIONS:
      return {
        ...state,
        organizations: action.payload,
      };
    case actionName.SET_USER_CURRENT_ORGANIZATION:
      return {
        ...state,
        currentOrg: action.payload,
      };
    case actionName.SET_USER_CURRENT_ORGANIZATION_NAME:
      return {
        ...state,
        currentOrgName: action.payload,
      };
    case actionName.SET_USER_TRIAL:
      return {
        ...state,
        is_trial: action.payload,
      };
    case actionName.SET_USER_SUSCRIPTION_AVAIABLE:
      return {
        ...state,
        subs_caducated: action.payload,
      };

    case actionName.SET_USER_SUSCRIPTION_STATUS:
      return {
        ...state,
        subscription_status: action.payload,
      };
    case actionName.SET_INITIAL_STATE:
      return {
        ...initialState,
      };

    case actionName.SET_NAVBAR_TOGGLE:
      return {
        ...state,
        navbarMini: action.payload,
      };
    case actionName.SET_INTEGRATION_LIST:
      return {
        ...state,
        integrations: action.payload,
      };
    case actionName.SET_INTEGRATION_STATUS:
      return {
        ...state,
        integration_status: action.payload,
      };
    case actionName.SET_HISTORY:
      return {
        ...state,
        history: action.payload,
      };
    case actionName.SET_FETCH_INTEGRATION:
      return {
        ...state,
        fetchIntegrations: action.payload,
      };
    case actionName.SET_LOADING:
      return {
        ...state,
        globalLoading: action.payload,
      };
    case actionName.SET_GLOBAL_REFETCH:
      return {
        ...state,
        refetchOnPage: action.payload,
      };
    case actionName.SET_FETCH_USER:
      return {
        ...state,
        fetchUserInfo: action.payload,
      };
    case actionName.SET_ALERT:
      return {
        ...state,
        max_alert: action.payload,
      };
    case actionName.SET_SHOW_MAIN_FILTER:
      return {
        ...state,
        show_main_filter: action.payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
