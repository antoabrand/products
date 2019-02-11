import { Component, ViewChild } from '@angular/core';
import { IProductState } from './ngrx/product/product.state';
import * as productActions from './ngrx/product/product.actions';
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { filter, tap, map } from 'rxjs/operators';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private store: Store<IProductState>) {}

    @ViewChild(MatPaginator) paginator: MatPaginator;
    displayedColumns: string[] = ['ID', 'Description', 'lastSold', 'ShelfLife', 'Department', 'Price', 'Unit', 'xFor', 'Cost'];
    
    private productState = createFeatureSelector<IProductState>('productState');
    private productsData = createSelector(
        this.productState,
        (state: IProductState) => state.data[0]
    );

    
    private dataSource = this.store.select(this.productsData).subscribe(response => this.dataSource = response);

    public matDataSourcePag = new MatTableDataSource<Products>(this.dataSource);
    ngOnInit(): void {
        this.store.dispatch(new productActions.GetProductsAction());
        this.dataSource.paginator = this.paginator;
       
    }
    public search(value): any {

        let filteredData = [];
        console.log('This is before we do the stuff');
        console.log(this.dataSource.data);

        for(let index = 0; index<this.dataSource.data.length;index++){
          for(let key in this.dataSource.data[index]){
              if(value === ""){
                  filteredData = [...this.dataSource.data];
                  break;
              }
              if(this.dataSource.data[index][key].indexOf(value) > -1)
                filteredData = [...filteredData, this.dataSource.data[index]]

          }
        }

        // Object.keys(this.dataSource.data)
        //   .forEach(key => { filteredData = [...filteredData, Object.values(this.dataSource.data[key])
        //   .filter((x: any) => x.indexOf(value) > -1)] 
        // })

        console.log('After filtering: ');
        console.log(filteredData);
    }

   
}
export interface Products {
    ID: string;
    Description: number;
    lastSold: number;
    ShelfLife: string;
    Department: string;
    Price: string;
    Unit: string;
    xFor: string;
    Cost: string;
  }