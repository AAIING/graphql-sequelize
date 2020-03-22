import '@babel/polyfill'
import express from 'express'
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())


const server = new ApolloServer({
    modules: [
        require('./GraphQL/evento_usuario'),
        require('./GraphQL/pedido'),
        require('./GraphQL/users'),
        require('./GraphQL/evento'),
    ],
})


server.applyMiddleware({ app })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000`),
)
