const { makeExecutableSchema } = require('graphql-tools'),
    { join } = require('path'),
    { readFileSync } = require('fs'),
    pruebaResolver = require('../resolvers/prueba.resolvers'),
    cursoResolver = require('../resolvers/curso.resolvers')
    estudianteResolver = require('../resolvers/estudiante.resolvers')

let typeDefs = readFileSync(join(__dirname, "schema.graphql"), "utf-8")

let schema = makeExecutableSchema({
    typeDefs, resolvers:
        [
            pruebaResolver,
            cursoResolver,
            estudianteResolver
        ]
});

module.exports = {
    schema
}