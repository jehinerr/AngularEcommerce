import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  constructor(private http: HttpClient) {}

  getProductList(): Observable<string> {
    return this.http.get('https://fakestoreapi.com/products').pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
