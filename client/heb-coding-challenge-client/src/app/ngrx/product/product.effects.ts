import { Injectable } from '@angular/core';
import { IProductState } from './product.state';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProductService } from './product.service';
import { Product } from 'src/Types/product-type';
import * as productActions from '../product/product.actions';
import { empty } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productService: ProductService,
        private store: Store<IProductState>
    ) {}

    @Effect()
    getAttributes$ = this.actions$
        .ofType<productActions.GetProductsAction>(productActions.GET_PRODUCTS)
        .pipe(
            switchMap(() => this.productService.getProducts()),
            map(attributes => new productActions.GetProductsSuccessAction(attributes)),
            catchError(err => {
                this.store.dispatch(new productActions.GetProductsFailAction(err));
                return empty();
            })
        );
}
