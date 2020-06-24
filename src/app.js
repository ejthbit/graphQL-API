import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from '../typeDefs/typedefs'
import {resolvers} from '../resolvers/resolvers'
import express from 'express'
import mongoose from 'mongoose'

const PORT = 9000

const startApolloServer = () => {
    const app = express()
    const server = new ApolloServer({typeDefs, resolvers})
    server.applyMiddleware({app})
    mongoose.connect('mongodb://localhost:27017/person', {useNewUrlParser: true, useUnifiedTopology: true})

    app.listen({port: PORT}, () => {
        console.log(`🌑 Apollo Server is running at http://localhost:${PORT}/graphql`)
    })
}
startApolloServer()
