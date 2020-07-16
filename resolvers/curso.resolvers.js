;
'use strict'

const cursosQuery = require('./queries/cursos.querys')
const cursosMutation = require('./mutations/curso.mutation')

module.exports = {
    Query: cursosQuery,
    Mutation: cursosMutation
}