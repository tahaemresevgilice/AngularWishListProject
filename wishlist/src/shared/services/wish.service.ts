import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { WishItem } from '../models/wishtitem';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http:HttpClient) { }

  private getStandartOptions() : any{
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }

  getWishes(){
    let options = this.getStandartOptions();

    options.params = new HttpParams({
      fromObject:{
        format: 'json'
      }
    });

    return this.http.get('assets/wishes.json',options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 0){
      console.error('There is an isue with the client or network:', error.error);
    }
    else{
      console.error('Server-side error: ', error.error)
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Plase try again.'))
  }

  private addWish(wish:WishItem){
    let options = this.getStandartOptions();

    options.headers = options.headers.set('Autohorization','value-need-for-authorization');
    this.http.post('assets/wishes.json', wish , options);
  }
}
