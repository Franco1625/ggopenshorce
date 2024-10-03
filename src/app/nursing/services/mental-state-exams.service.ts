import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MentalStateExamsService {
  private patientsUrl = 'http://localhost:3000/patients';
  private examinesUrl = 'http://localhost:3000/examiners';
  private mentalStateExamsUrl = 'http://localhost:3000/mental-state-exams';


  constructor(private http: HttpClient) { }

  getMentalStateExams(): Observable<any[]> {
    return this.http.get<any[]>(this.mentalStateExamsUrl);
  }

  getPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.patientsUrl);
  }

  getExaminers(): Observable<any[]> {
    return this.http.get<any[]>(this.examinesUrl);
  }
}
