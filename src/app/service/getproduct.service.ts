import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetproductService {
  constructor(private _HttpClient: HttpClient) {}


  getProduct(catName:string):Observable<any>{
    return this._HttpClient.get(
      `https://localhost:7024/api/Product?categoryName=${catName}`
    );
  }
}
