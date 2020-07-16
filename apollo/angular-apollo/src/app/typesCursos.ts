export type Curso = {
    _id: number,
    titulo: string,
    profesor: string,
    descripcion: string,
    genero: string
}
export type QueryCursos = {
    allCursos: Curso[];
}