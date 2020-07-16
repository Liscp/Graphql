export type Courses = {
    _id: number,
    titulo: string,
    profesor: string,
    descripcion: string,
    genero: string,
}

export type Query = {
    allCourses: Courses[];
}