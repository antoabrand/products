import { Component } from '@angular/core';
import { IProductState } from './ngrx/product/product.state';
import * as productActions from './ngrx/product/product.actions';
import { Store } from '@ngrx/store';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private store: Store<IProductState>){}
    title = 'heb-coding-challenge-client';

    ngOnInit(): void {
        this.store.dispatch(new productActions.GetProductsAction());
    }
}



