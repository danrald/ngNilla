import { Injectable } from '@angular/core';
import { Framework } from '../models/frameworks.model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private mockFrameworks: Framework[] = [
    { id: 1, name: 'Spartan', url : 'https://www.spartan.ng/'},
    { id: 2, name: 'Taiga UI', url : 'https://taiga-ui.dev/' },
    { id: 3, name: 'Flowbite',  url : 'https://flowbite.com/docs/getting-started/angular/'  },
    { id: 3, name: 'Angular Material',  url : 'https://material.angular.io/' },
    { id: 3, name: 'Prime NG',  url : 'https://primeng.org/' },
    { id: 3, name: 'MDB - Material Design Bootstrap',  url : 'https://mdbootstrap.com/docs/angular/' },
  ];
  constructor() { }

  getFrameworks() : Observable<Framework[]>{
    
    return of(this.mockFrameworks).pipe(delay(1000));
  }

}
