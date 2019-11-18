const { makeExecutableSchema } = require('apollo-server')

const { typeDefs, resolvers } = require('./models')
const context = require('./context')

const schema = makeExecutableSchema({ typeDefs, resolvers })

module.exports = {
  schema,
  context
}
