import {gql} from 'apollo-server-express'

export const typeDefs = gql`
    type Query {
        Employees: [Person!]!
    }
    type Person {
        id: ID!
        name: String!
        position: String!
    }
    type DeleteResponse {
        id: String!
    }
    type Mutation {
        createPerson(name: String!, position: String!): Person
        deletePerson(id: ID!): DeleteResponse
    }
`
