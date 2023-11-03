/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@angular/core';
import { Course } from 'src/app/view/declarations';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private data: Course[] = [];

  constructor() {}

  getHeroes() {
    this.data = Array(15).fill(null).map((_, i) => i).map(i => ({
      id: 'id' + i,
      title: 'title ' + i,
      date: new Date(),
      duration: '1h ' + i + 'min',
      description: 'description' + i + ' dfdf dfdfd dffdfd dderere rerer erere ererer  sdsd xzzzxzcvcxvcxv cxcxd swss23 23 sddf',
    }));
    return this.data;
  }
}
