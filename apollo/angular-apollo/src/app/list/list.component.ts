import { Component, OnInit } from '@angular/core';
import { Apollo } from "apollo-angular";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import gpl from "graphql-tag";
import { Courses, Query } from "../types";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  courses: Observable<Courses[]>;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.courses = this.apollo.watchQuery<Query>({
      query: gpl`
        query allCourses {
          allCourses {
            _id
            titulo
            profesor
            descripcion
            genero
          }
        }
      `
    })
    .valueChanges
    .pipe(
      map(result => result.data.allCourses)
    )
  }

}
