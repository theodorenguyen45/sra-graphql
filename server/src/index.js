const { ApolloServer } = require('apollo-server')

const options = require('./server')
const handleSignal = require('./utils/handleSignal')

const server = new ApolloServer({
  ...options,
  cors: true,
  onHealthCheck: () => {
    return new Promise((resolve, reject) => {
      if (true) resolve()

      reject()
    })
  }
})

server
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
    console.log(`🚀  Health check at ${url}.well-known/apollo/server-health`)
  })
  .then(handleSignal)
