import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const graphqlUrl = `http://localhost:3000/graphql`
const httpLink = new HttpLink({ uri: graphqlUrl });

// adding auth headers
const authMiddleware = new ApolloLink((operation, forward) => {
  fetchSession().then((session) => {
    operation.setContext({
      headers: {
        authorization: session ? "Bearer " + session.token : null
      }
    });
  })
  return forward(operation);
});


// Creating a client instance
const client = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache({
    addTypename: false
  })
});

import Routes from './src/Routes'

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Routes/>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
