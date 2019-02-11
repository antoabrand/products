import { Product } from 'src/Types/product-type';

export interface IProductState {
    loaded: boolean;
    loading: boolean;
    data: Product[];
}

export const ProductInitialState: IProductState = {
    loaded: false,
    loading: false,
    data: []
};
