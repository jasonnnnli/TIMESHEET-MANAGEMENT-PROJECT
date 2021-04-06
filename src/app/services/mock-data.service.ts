import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Timecard } from '../timecard';

@Injectable({
  providedIn: 'root'
})
export class MockDataService {

  private users:string = "http://localhost:4000/users";
  private timecards:string = "http://localhost:4000/timecards";

  constructor(private http: HttpClient) { }
  
  getTimecards() {
    return this.http.get(this.timecards)
    .pipe(catchError(this.errorHandler));
  }

  getUsers() {
    return this.http.get(this.users)
    .pipe(catchError(this.errorHandler));
  }
  

  postTimecard(empData: any): Observable<Timecard[]>{
    console.log('from service')
    console.log(empData)
    return this.http.post<Timecard[]>(this.timecards, empData)
    .pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
