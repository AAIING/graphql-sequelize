import { gql } from 'apollo-server-express'
import * as db from '../database'

export const typeDefs = gql`
    extend type Query {
        getAllEventoUsuarios: [EventoUsuario]
        getEventoUsuarioById(id: ID!): EventoUsuario
        getEventoUsuarioByUserId(id_usuario: ID!): [EventoUsuario]
    }    
    type EventoUsuario {
        id: ID!
        id_evento: Int
        id_empresa: Int
        id_usuario: ID!
        evento: Evento
    }
`
//getEventoUsuarioByEvento(id_evento: ID!): [EventoUsuario]

export const resolvers = {
    Query: {
        getAllEventoUsuarios: async () => db.evento_usuario.findAll(),
        getEventoUsuarioById: async (obj, args, context, info) => 
                                          db.evento_usuario.findByPk(args.id),
        getEventoUsuarioByUserId: async (obj, args, context, info) => 
                                          db.evento_usuario.findAll({
                                              where:{id_usuario: args.id_usuario }
                                          }),                                   
    },
    EventoUsuario:{
        evento: async (obj, args, context, info) =>
				db.evento.findByPk(obj.id_evento),    
    },
}

