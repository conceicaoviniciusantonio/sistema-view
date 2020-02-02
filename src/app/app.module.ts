import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PluginsModule } from './modules/plugins/plugins.module';
import { HomeModule } from './modules/home/home.module';
import { MatMenuModule, MatToolbarModule } from '@angular/material';
import { CadastrosModule } from './modules/cadastros/cadastros.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatMenuModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    PluginsModule,
    HomeModule,
    CadastrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
