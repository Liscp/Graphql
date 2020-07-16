;
'use strict'

const estudianteQuery = require('./queries/estudiante.querys')

const estudianteMutation = require('./mutations/estudiante.mutation')

module.exports = {
    Query: estudianteQuery,
    Mutation: estudianteMutation
}