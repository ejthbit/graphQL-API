import {ApolloServer} from 'apollo-server-express'
import {typeDefs} from './typeDefs/typedefs'
import {resolvers} from './resolvers/resolvers'
import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'

const startApolloServer = () => {
    dotenv.config()
    const app = express()
    const server = new ApolloServer({typeDefs, resolvers})
    server.applyMiddleware({app})
    mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    mongoose.set('useCreateIndex', true)

    app.listen(process.env.RUNNING_PORT, () => {
        console.log(`🚀🌑 Apollo Server is running at http://localhost:${process.env.RUNNING_PORT}/graphql`)
    })
}
startApolloServer()
