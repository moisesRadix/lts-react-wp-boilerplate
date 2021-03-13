import dotenv from "dotenv";
import { hist } from "views/app";
import { logout } from "utils/auth/login";
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";

dotenv.config();

const graphURI =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_APOLLO_URI_DEV
    : process.env.REACT_APP_APOLLO_URI_PROD;

const cache = new InMemoryCache({
  addTypename: false,
});
const httpLink = createHttpLink({
  uri: graphURI,
});

const errorHandler = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      // this action is currently not usefull
      // const integrarionToken = localStorage.getItem('integrationTokenSelection');
      if (extensions.code) {
        if (extensions.code === "UNAUTHENTICATED") {
          logout(hist);
        }
      }
    });
  // if (networkError)
  // 	console.log(
  // 		`[Network error]: ${networkError.message} | Result: ${networkError.result} | Response: ${networkError.response} `,
  // 	);
});

const authLink = setContext(async (_, { headers }) => {
  // Get the token from LS
  const token = localStorage.getItem("integrationToken");
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const link = ApolloLink.from([errorHandler, authLink, httpLink]);

const client = new ApolloClient({
  // Provide required constructor fields
  // Muy necesaria la configuracion de mutate, query y watchQuery, chequeando error policy y fetchPolicy
  cache: cache,
  link: link,
  name: "Radix Platform Chart-GraphQL-Client",
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "no-cache",
    },
    query: {
      fetchPolicy: "no-cache",
    },
    mutate: {
      fetchPolicy: "no-cache",
    },
  },
});

export default client;
