export type Estudiantes = {
    _id: number
    nombre: string
    email: string
}
export type QueryEstudiantes = {
    allEstudiantes: Estudiantes[];
}