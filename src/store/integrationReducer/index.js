import { initialTokenState as initialState } from "../initialState";
import * as actionName from "../actions";

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionName.SET_NEW_INT_TOKEN:
      return {
        ...state,
        integrationToken: action.payload,
      };
    case actionName.SET_INTEGRATION_TEXT:
      return {
        ...state,
        filterText: action.payload,
      };
    case actionName.SET_NEW_INT_VARS:
      return {
        ...state,
        globalFilter: action.payload,
      };
    case actionName.SET_SELECTED_FILT:
      return {
        ...state,
        selectionFilter: action.payload,
      };
    case actionName.SET_INT_OPTION_LIST:
      return {
        ...state,
        filterOptionList: action.payload,
      };
    case actionName.SET_INT_GF_ONCHANGE:
      return {
        ...state,
        globalFilterOnchange: action.payload,
      };
    case actionName.SET_INT_RELOAD:
      const reload_same = state.globalFilter;
      return {
        ...state,
        globalFilter: { ...reload_same },
      };
    case actionName.SET_INITIAL_STATE:
      return {
        ...initialState,
      };

    default:
      return { ...state };
  }
};

export default tokenReducer;
