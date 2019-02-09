import { Product } from '../../../Types/product-type';

export const GET_PRODUCTS = '[HEB-CODING-CHALLENGE] - Get Products';
export const GET_PRODUCTS_SUCCESS = '[HEB-CODING-CHALLENG] - Get Products Success';
export const GET_PRODUCTS_FAIL = '[HEB-CODING-CHALLENG] - Get Products Fail';

//creates

//reads
export class GetProductsAction {
    readonly type = GET_PRODUCTS;
    constructor() {}
}

export class GetProductsSuccessAction {
    readonly type = GET_PRODUCTS_SUCCESS;
    constructor(public payload: Product[]) {}
}

export class GetProductsFailAction {
    readonly type = GET_PRODUCTS_FAIL;
    constructor(public payload: any) {}
}

//updates

//deletes

export type Actions = GetProductsAction | GetProductsSuccessAction | GetProductsFailAction;
