import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, retry, switchMap } from 'rxjs/operators';

const api = 'https://pokeapi.co/api/v2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public get<Request, Response>(url: string, payload?: Request): Observable<Response> {
    return this.mountGetUrl(url, payload)
      .pipe(
        switchMap((getUrl) => this.http.get<Response>(getUrl)),
        retry(3),
        catchError(err => of(err)),
      )
    
  }

  public mountGetUrl(url: string, payload?: any): Observable<string> {
    return payload ? of(api + url + Object.values(payload).reduce((prev, curr) => prev + '/' + curr)) : of(api + url);
  }
}
