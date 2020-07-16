;
'use strict'
let connectDb = require('../../config/db')
let { ObjectID } = require('mongodb')

module.exports = {
    getCursos: async () => {
        let db, cursos
        try {
            db = await connectDb()
            cursos = await db.collection('cursos').find().toArray()
        } catch (error) {
            console.error(error)
        }
        return cursos
    },

    getCurso: async (root, {id}) => {
        let db, curso
        try {
            db = await connectDb()
            curso = await db.collection('cursos').findOne({_id: ObjectID(id)})
        } catch (error) {
            console.error(error)
        }
        return curso
    }

}