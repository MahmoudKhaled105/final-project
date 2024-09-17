import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewDetailsService {
  constructor(private _HttpClient: HttpClient) {}

  viewProd(id:string|null):Observable<any>{
    return this._HttpClient.get(`https://localhost:7024/api/Product/${id}`);
  }
}
