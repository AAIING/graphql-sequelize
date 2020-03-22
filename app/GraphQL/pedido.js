import { gql } from 'apollo-server-express'
import * as db from '../database'

export const typeDefs = gql`
    extend type Query {
        getAllPedidos: [Pedido]
        getPedido(id: ID!): Pedido
        getPedidoByUser(id_usuario: ID!): [Pedido]
        getPedidoByEvento(id_evento: ID!): [Pedido]
    }

    type Pedido {
        id_pedido: ID!
        fecha_pedido: String
        hora_pedido: String
        turno_retiro: String
        estado: String
        id_usuario: ID!
        total_pedido: String
        id_evento: ID!
    }
`

export const resolvers = {
    Query: {
        getAllPedidos: async () => db.pedido.findAll(),
        getPedido: async (obj, args, context, info) => 
                                        db.pedido.findByPk(args.id),
        getPedidoByUser: async (obj, args, context, info) => 
                                        db.pedido.findAll({
                                            where:{id_usuario: args.id_usuario
                                            }
                                        }), 
        getPedidoByEvento: async (obj, args, context, info) => 
                                        db.pedido.findAll({
                                            where:{id_evento: args.id_evento
                                            }
                                        }), 
    },
}