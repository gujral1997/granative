import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql'

export default new GraphQLObjectType({
  name: 'UserType',
  fields: {
    id: {
        type: new GraphQLNonNull(GraphQLID)
    },
    email: {
        type: GraphQLString
    }
  }
});
