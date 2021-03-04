import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


export interface ApiInterface {
     status: boolean;
     payload: any;
     message:string
}


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    baseUrl: string = '';
    constructor(private http: HttpClient, private router: Router){

    }

    get(url, body?: Object){
        return this.http.get(this.baseUrl + url, body)
        .pipe(map((responseData: ApiInterface) => {
          return responseData;
        }), catchError(this.handleError))   
    }


    post(url, body?: Object){
        return this.http.post(this.baseUrl + url, body)
        .pipe(map((responseData: ApiInterface) => {
          return responseData;
        }), catchError(this.handleError))
    }


    
    private handleError(errRes: HttpErrorResponse){
      // this.notifyService.sendNotification({'type': 'error', 'message': errRes.error.message});

      if(errRes.error.message == 'Unauthenticated.'){
         localStorage.removeItem('authData');
        //  this.router.navigate(['login']);
      }

      return throwError(errRes.error.message);
    }
}