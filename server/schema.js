import {GraphQLSchema} from 'graphql'

import RootQueryType from './types/root_query_type'
import mutation from './mutations/index'

module.exports = new GraphQLSchema({
  query: RootQueryType,
  mutation
});
