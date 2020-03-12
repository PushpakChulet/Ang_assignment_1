import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getQualifications(): Observable<string[]> {
    return of(['BE', 'BA', 'BCA', 'MA']);
  }

  getExperiences(): Observable<string[]> {
    return of(['Fresheman', '1-2 years', '3-6 years', '7+']);
  }

}