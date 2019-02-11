import { Product } from './../Types/product-type';
import { Component } from '@angular/core';
import { IProductState} from './ngrx/product/product.state';
import * as productActions from './ngrx/product/product.actions';
import { Store, createSelector, createFeatureSelector} from '@ngrx/store';
import { MatTableDataSource } from '@angular/material';
import { take, filter, map } from 'rxjs/operators';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private store: Store<IProductState>){}

public someSthi;
private productState = createFeatureSelector<IProductState>('productState');
private products = createSelector(this.productState, (state:IProductState) => state.data[0]);
public products$ = this.store.select(this.products).subscribe(response => this.someSthi = response);

    ngOnInit(): void {
        this.store.dispatch(new productActions.GetProductsAction());

    }

    search(value) : any {
      console.log(this.someSthi.data);
    }
}


