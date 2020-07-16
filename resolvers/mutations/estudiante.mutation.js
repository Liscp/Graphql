;
'use strict'
let connectDb = require('../../config/db')
let { ObjectID } = require('mongodb')

module.exports = {
    nuevoEstudiante: async (root, { input }) => { 
        let db, estudiante
        try {
            db = await connectDb()
            estudiante = await db.collection('estudiantes').insertOne(input)
        } catch (error) {
            console.error(error)
        }
        return estudiante
    },

    editarEstudiante: async (root, { id, input }) => {
        let db, estudiante
        try {
            db = await connectDb()
            await db.collection('estudiantes').updateOne(
                { id: ObjectID(id) },
                { $set: input }
            )
            estudiante = await db.collection('estudiantes').findOne({ _id: ObjectID(id) })
        } catch (error) {
            console.error(error)
        }
        return estudiante
    }
}