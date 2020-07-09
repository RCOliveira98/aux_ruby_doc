import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconsProviderModule } from '../app/modules/icons-provider.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { MenuComponent } from './components/menu/menu.component';
import { ItemMenuInicioComponent } from './components/menu/item-menu-inicio/item-menu-inicio.component';
import { ItemMenuArrayComponent } from './components/menu/item-menu-array/item-menu-array.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const ngZorroAnt = [NzLayoutModule, NzMenuModule];

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemMenuInicioComponent,
    ItemMenuArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconsProviderModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ngZorroAnt,
    FontAwesomeModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
