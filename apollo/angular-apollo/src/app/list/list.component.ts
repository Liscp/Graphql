import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import gpl from "graphql-tag";
import { Curso, QueryCursos} from "../typesCursos";
import { Estudiantes, QueryEstudiantes } from "../typeEstudiantes";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  cursos: Observable<Curso[]>;
  estudiantes: Observable<Estudiantes[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.cursos = this.apollo.watchQuery<QueryCursos>({
      query: gpl`
        query allCursos {
          allCursos {
            _id
            titulo
            profesor
            descripcion
            genero
          }
        }
      `
    });
    this.estudiantes = this.apollo.watchQuery<QueryEstudiantes>({
      query: gpl`
        query allEstudiantes {
          allEstudiantes {
            _id: number
            nombre: string
            email: string
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.allCursos)
    )
  }

}
