import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { reducers } from './reducers';
import { AppEffects } from './app.effects';
import { ProductEffects } from './ngrx/product/product.effects';
import { stateSetter } from './ngrx/meta-reducers/set-intial-state-reducer';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent, HeaderComponent, FooterComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, { metaReducers: [stateSetter] }),
        EffectsModule.forRoot([AppEffects, ProductEffects]),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        BrowserAnimationsModule,
        MaterialModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
