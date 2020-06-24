import {ApolloServer, gql} from 'apollo-server-express'
import {typeDefs, resolvers} from './schema'

const server = new ApolloServer({typeDefs, resolvers})

server.listen().then(({url}) => {
    console.log(`🚀  Server ready at ${url}`)
})
