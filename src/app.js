import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from '../schema/typedefs'
import {resolvers} from '../schema/resolvers'
import express from 'express'

const PORT = 9000
const app = express()
const server = new ApolloServer({typeDefs, resolvers})
server.applyMiddleware({app})

app.listen({port: PORT}, () => {
    console.log(`🚀 Appolo Server is running at http://localhost:${PORT}/graphql`)
})
