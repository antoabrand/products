import { Component } from '@angular/core';
import { IProductState} from './ngrx/product/product.state';
import * as productActions from './ngrx/product/product.actions';
import { Store, createSelector, createFeatureSelector} from '@ngrx/store';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private store: Store<IProductState>){}

productState = createFeatureSelector<IProductState>('productState');

products = createSelector(this.productState, (state:IProductState) => state.data[0]);

products$ = this.store.select(this.products);

    ngOnInit(): void {
        this.store.dispatch(new productActions.GetProductsAction());
    }


}
