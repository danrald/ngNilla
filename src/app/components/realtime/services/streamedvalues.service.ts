import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class StreamedvaluesService {

  private dataSubject = new BehaviorSubject<number>(0);
  public data$ = this.dataSubject.asObservable();
  
  constructor() {
    // Generate random data
    let valueSeed = 100;
    // Simulate streaming data every second
    interval(1000).pipe(
      // map(() => Math.random() * 100)

      map(() => valueSeed + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 6))
    ).subscribe(value => {
      this.dataSubject.next(value);
    });
  }
}



