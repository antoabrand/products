import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAppState } from 'src/app/app-state';
import { Store } from '@ngrx/store';
import { Product } from 'src/Types/product-type';

@Injectable({ providedIn: 'root' })
export class ProductService {
    constructor(private http: HttpClient, private store: Store<IAppState>) {}

    private localApiURL = 'http://localhost:8080';

    public getProducts() {
        return this.http.get<Product[]>(`${this.localApiURL}/api/products`);
    }
}
