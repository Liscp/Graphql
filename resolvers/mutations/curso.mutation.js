;
'use strict'
let connectDb = require('../../config/db')
let { ObjectID } = require('mongodb')

module.exports = {
    nuevoCurso: async (root, { input }) => {
        const defaults = {
            descripcion: '',
            genero: ''
        }
        const nuevoCurso = Object.assign(defaults, input)
        let db, curso
        try {
            db = await connectDb()
            curso = await db.collection('cursos').insertOne(nuevoCurso)
            nuevoCurso._id = curso.insertId
        } catch (error) {
            console.error(error)
        }
        return nuevoCurso
    },

    editarCurso: async (root, { id, input }) => {
        let db, curso
        try {
            let asistentes = []
            if (input.asistentes.length > 0) {
                input.asistentes.forEach(asistentes => {
                    console.log(asistentes)
                    asistentes.push(ObjectID(asistentes))
                });
            }
            db = await connectDb()
            console.log(input.asistentes)
            await db.collection('cursos').updateOne(
                { id: ObjectID(id) },
                { $set: input }
            )
            curso = await db.collection('cursos').findOne({ _id: ObjectID(id) })
        } catch (error) {
            console.error(error)
        }
        return curso
    }
}