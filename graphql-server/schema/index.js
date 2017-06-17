const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull
} = require('graphql');

const { categoryType } = require('./types/category');
const { bookType } = require('./types/book');

const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    category: {
      type: categoryType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    },
    categories: {
      type: new GraphQLList(categoryType)
    },
    book: {
      type: bookType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      }
    }
  })
});

const schema = new GraphQLSchema({
  query: queryType
});

module.exports = schema;
