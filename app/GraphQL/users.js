import { gql } from 'apollo-server-express'
import * as db from '../database'

export const typeDefs = gql`
    extend type Query {
        users: [User]
        user(id: ID!): User
    }

    type User {
        id_usuario: ID!
        nombre: String
        apellido: String
        telefono: String
        email: String
        rol_usuario: String
    }
`

export const resolvers = {
    Query: {
        users: async () => db.usuario.findAll(),
        user: async (obj, args, context, info) => db.usuario.findByPk(args.id),
    },
}


