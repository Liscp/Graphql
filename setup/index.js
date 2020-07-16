;
'use strict'

const env = require('dotenv').config(),
    { graphqlHTTP } = require('express-graphql'),
    { schema } = require('../schemas/configSchema')
port = process.env.PORT || 4500

let app = require('./app')

app.use('/gql', graphqlHTTP({
    schema: schema,
    graphiql: true
}))

app.listen(port, (err) => {
    if (!err) {
        console.log(`el servidor esta corriendo en http://localhost:${port}`)
    } else {
        console.log(`el servidor no esta corriendo`);
    }
})