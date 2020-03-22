import { gql } from 'apollo-server-express'
import * as db from '../database'

export const typeDefs = gql`
    extend type Query {
        getAllEventos: [Evento]
        getEvento(id: ID!): Evento
        getEventoByEmpresa(id_empresa: ID!): [Evento]
    }

    extend type Mutation{
        changeStatusPedido(id_evento: ID!, estado_pedido: String): Evento!
    }

    type Evento {
        id_evento: ID!
        nombre_evento: String
        fecha: String
        hora_inicio: String
        hora_termino: String
        estado_pedido: String
        precio_entrada: Int
        direccion_evento: String
        lat_evento: String
        lng_evento: String
        descripcion_evento: String
        id_empresa: ID!
    }
`

export const resolvers = {
    Mutation:{
        changeStatusPedido: async (obj, args,  context, info) =>{
           console.log(args.id_empresa);
           return Promise.all([
                db.evento.update({ estado_pedido: args.estado_pedido},
                                   { where:{ id_evento: args.id_evento }})
           ]);
            
        }
     },

    Query: {
        getAllEventos: async () => db.evento.findAll(),
        getEvento: async (obj, args, context, info) => 
                                        db.evento.findByPk(args.id),
        getEventoByEmpresa: async (obj, args, context, info) => 
                                        db.evento.findAll({
                                            where:{ id_empresa: args.id_empresa }
                                        }), 
    },
}