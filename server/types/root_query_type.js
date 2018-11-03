import {GraphQLObjectType} from 'graphql'
import UserType from './user_type'

export default new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  }
});
