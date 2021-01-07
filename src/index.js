import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AUTH_TOKEN } from "./error/constants";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { withClientState } from "apollo-link-state";
import gql from "graphql-tag";

import { ApolloLink, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import App from "./App2";

require("dotenv").config();

const cache = new InMemoryCache();
const curDate = new Date();
const defaultState = {
  currentMatch: {
    __typename: "currentMatch",
    agencyAScore: 0,
    agencyBScore: 0,
    agencyAName: "Agency A",
    agencyBName: "Agency B",
  },
  currentDate: {
    __typename: "currentDate",
    date: curDate,
    matches: [],
  },
};

const stateLink = withClientState({
  cache,
  defaults: defaultState,
  resolvers: {
    Mutation: {
      updateMatch: (_, { index, value }, { cache }) => {
        const query = gql`
          query GetCurrentMatch {
            currentMatch @client {
              agencyAScore
              agencyBScore
              agencyAName
              agencyBName
            }
          }
        `;
        const previous = cache.readQuery({ query });
        const data = {
          currentMatch: {
            ...previous.currentMatch,
            [index]: value,
          },
        };

        cache.writeQuery({ query, data });
        return null;
      },
      resetCurrentMatch: (_, d, { cache }) => {
        cache.writeData({ data: defaultState });
        return null;
      },
    },
  },
});

const wsLink = new WebSocketLink({
  // uri: 'ws://localhost:4000/',
  uri: process.env.REACT_APP_WS_URI,
  options: {
    reconnect: true,
    // Found this in https://www.howtographql.com/react-apollo/8-subscriptions/
    // It is NOT in naperg's code.  YO: 04032019
    // ,connectionParams: {
    //   authToken: localStorage.getItem(AUTH_TOKEN),
    // }
  },
});

// const httpLink = new HttpLink({ uri: 'http://localhost:4000' })
const httpLink = new HttpLink({ uri: process.env.REACT_APP_GRAPHQL_API });

const middlewareAuthLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem(AUTH_TOKEN);
  const authorizationHeader = token ? `Bearer ${token}` : null;
  operation.setContext({
    headers: {
      authorization: authorizationHeader,
    },
  });
  return forward(operation);
});

const httpLinkWithAuthToken = middlewareAuthLink.concat(httpLink);

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLinkWithAuthToken
);

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, link]),
  cache,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
