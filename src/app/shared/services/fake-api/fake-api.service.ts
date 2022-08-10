import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class FakeApiService {
  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get('https://fakestoreapi.com/products').pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
