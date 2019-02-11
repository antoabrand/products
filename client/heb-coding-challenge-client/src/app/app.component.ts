import { Component } from '@angular/core';
import { IProductState } from './ngrx/product/product.state';
import * as productActions from './ngrx/product/product.actions';
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { MatTableDataSource } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private store: Store<IProductState>) {}

    public displayedColumns: string[] = [
        'ID',
        'Description',
        'lastSold',
        'ShelfLife',
        'Department',
        'Price',
        'Unit',
        'xFor',
        'Cost'
    ];
    public productState = createFeatureSelector<IProductState>('productState');
    public productsData = createSelector(
        this.productState,
        (state: IProductState) => state.data[0]
    );

    //just a little bit of validation to make sure they don't type in some long sequence of characters -
    searchForm = new FormControl('', [Validators.maxLength(50)]);

    //datasource
    public data = this.store
        .select(this.productsData)
        .subscribe(response => (this.data = response));
    public matDataSource;

    ngOnInit(): void {
        this.store.dispatch(new productActions.GetProductsAction());
        //doing this becuase otherwise the intitilziation happens before the stream can finish - causing the mat table to render against an undefined datasource
        //a hacky way to ensure my data is in place before the html tries to render 
        setTimeout(() => (this.matDataSource = new MatTableDataSource(this.data.data)), 5);
    }

    search(value): any {
        if(this.searchForm.dirty && this.searchForm.valid)
            this.matDataSource.filter = value.trim().toLowerCase();
    }
}