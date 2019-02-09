import { IProductState } from '../ngrx/product/product.state';
import { ProductReducer } from '../ngrx/product/product.reducer';

export interface State {
    productState: IProductState;
}

export const reducers = {
    productState: ProductReducer
};
