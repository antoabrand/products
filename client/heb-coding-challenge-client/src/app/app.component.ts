import { Component } from '@angular/core';
import { IProductState } from './ngrx/product/product.state';
import * as productActions from './ngrx/product/product.actions';
import { Store, createSelector, createFeatureSelector } from '@ngrx/store';
import { filter, tap, map } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private store: Store<IProductState>) {}

    private productState = createFeatureSelector<IProductState>('productState');
    private productsData = createSelector(
        this.productState,
        (state: IProductState) => state.data[0]
    );
    public products$ = this.store.select(this.productsData);
    // .subscribe(response => this.dataSource = response);

    ngOnInit(): void {
        this.store.dispatch(new productActions.GetProductsAction());
    }

    public search(value): any {
        let filteredData = [];
        console.log('This is before we do the stuff');
        // console.log(this.dataSource.data);

        // for(let index = 0; index<this.dataSource.data.length;index++){
        //   for(let key in this.dataSource.data[index]){
        //       if(this.dataSource.data[index][key].indexOf(value) > -1)
        //         filteredData = [...filteredData, this.dataSource.data[index]]
        //   }
        // }

        // Object.keys(this.dataSource.data)
        //   .forEach(key => { filteredData = [...filteredData, Object.values(this.dataSource.data[key]).filter((x: any) => x.indexOf(value) != -1)] })

        if (value && value != '') {
            this.products$ = this.store
                .select(this.productsData)
                .pipe(
                  tap(val => console.log("Tap before filter" + Object.values(val))),
                  map(x => (x)),
                  tap(x => console.log("Tap after getting Object values" + x))
                )
        }

    }
}
