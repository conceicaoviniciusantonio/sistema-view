import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { GeralModule } from '../geral/geral.module';
import { PluginsModule } from '../plugins/plugins.module';
import { MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    GeralModule,
    FlexLayoutModule,
    PluginsModule,
  ]
})
export class HomeModule { }
