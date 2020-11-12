import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public retrieveId(urlId): string {
    return urlId.split('/').slice(-2)[0];
  }
  
}
