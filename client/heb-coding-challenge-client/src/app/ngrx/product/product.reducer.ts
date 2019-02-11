import * as productActions from './product.actions';
import { IProductState, ProductInitialState } from './product.state';

export function ProductReducer(
    state: IProductState = ProductInitialState,
    action: productActions.Actions
) {
    switch (action.type) {
        case productActions.GET_PRODUCTS:
            return { ...state, loading: true };
        case productActions.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [action.payload]
            };
        default:
            return { ...state };
    }
}
