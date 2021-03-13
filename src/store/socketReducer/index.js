import * as actionName from "../actions";
import { webSocketState } from "../initialState";

const socketReducer = (state = webSocketState, action) => {
  switch (action.type) {
    case actionName.SET_WEBSOCKET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case actionName.SET_WEBSOCKET_SYNCING:
      return {
        ...state,
        is_sync: action.payload,
      };
    case actionName.SET_WEBSOCKET_ON:
      return {
        ...state,
        is_connected: true,
      };
    case actionName.SET_WEBSOCKET_OFF:
      return {
        ...state,
        is_connected: false,
      };
    case actionName.SET_WEBSOCKET_ADD_NOTIFICATION:
      const current = state.sync_notification;
      return {
        ...state,
        sync_notification: [...current, action.payload],
      };
    case actionName.SET_WEBSOCKET_CLEAR_NOTIFICATION:
      return {
        ...state,
        sync_notification: [],
      };
    case actionName.SET_WEBSOCKET_PERCENTAGE:
      return {
        ...state,
        percentage: action.payload,
      };
    case actionName.SET_WEBSOCKET_TEXTBUTTON:
      return {
        ...state,
        sync_text: action.payload,
      };
    case actionName.SET_WEBSOCKET_PARTIAL:
      return {
        ...state,
        execPartialSync: action.payload,
      };
    case "CLEAR":
      return {
        ...webSocketState,
      };
    default:
      return { ...state };
  }
};

export default socketReducer;
