import { Component, ViewChild } from '@angular/core';
import { IProductState } from './ngrx/product/product.state';
import * as productActions from './ngrx/product/product.actions';
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { filter, tap, map } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private store: Store<IProductState>) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

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

    //datasource
    public data = this.store
        .select(this.productsData)
        .subscribe(response => (this.data = response));
    public matDataSource;

    ngOnInit(): void {
        this.store.dispatch(new productActions.GetProductsAction());
        setTimeout(() => (this.matDataSource = new MatTableDataSource(this.data.data)), 500);
    }

    ngAfterViewInit() {
        this.matDataSource.paginator = this.paginator;
        this.matDataSource.sort = this.sort;
    }

    search(value): any {
        this.matDataSource.filter = value.trim().toLowerCase();
    }
}
