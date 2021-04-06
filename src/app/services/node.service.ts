import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})



export class NodeService {
  
  constructor(private http: HttpClient) { }

  public headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  }
  postUser(empData: any) {
    console.log(empData)
    let myheaders = new HttpHeaders(this.headerDict) 
    return this.http.post("http://localhost:3000/users", empData, 
      { headers: myheaders})
    .pipe(catchError(this.errorHandler));
  }

  getUsers() {
    return this.http.get("http://localhost:3000/users")
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
