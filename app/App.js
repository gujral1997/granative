import React from 'react'
import { StyleSheet, AsyncStorage} from 'react-native'
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';

const graphqlUrl = `http://172.16.36.191:3000//graphql`
const link = new HttpLink({ uri: graphqlUrl });

// Creating a client instance
const client = new ApolloClient({
  link,
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
