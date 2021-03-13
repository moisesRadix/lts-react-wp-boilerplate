import React, { createContext, useReducer } from "react";
import reducer from "../store/reducer";
import socketReducer from "../store/socketReducer/index";
import dotenv from "dotenv";
import AdminLayout from "../layouts/admin";
import initialState, {
  initialTokenState,
  webSocketState,
} from "../store/initialState";
import tokenReducer from "../store/integrationReducer/index";
import { createBrowserHistory } from "history";
import "./style.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./auth/login/login";
dotenv.config();
export const hist = createBrowserHistory();
export const GlobalContext = createContext();

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [integrationState, dispatchInt] = useReducer(
    tokenReducer,
    initialTokenState
  );
  const [socket, dispatchSocket] = useReducer(socketReducer, webSocketState);

  return (
    <div>
      <GlobalContext.Provider
        value={{
          state: state,
          dispatch: dispatch,
          intToken: integrationState,
          dispatchToken: dispatchInt,
          sync: socket,
          dispatchSync: dispatchSocket,
        }}
      >
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Switch>
              <Route
                path="/auth/login"
                exact
                render={(props) => <Login {...props} />}
              />
              <Route
                path="/admin"
                exact
                render={(props) => <AdminLayout {...props} />}
              />
            </Switch>
          </BrowserRouter>
        </ApolloProvider>
      </GlobalContext.Provider>
    </div>
  );
}
