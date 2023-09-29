import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home.component';
import { Routes, RouterModule} from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'; 
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ScannerComponent } from './views/scanner/scanner.component';
import { NavMenuComponent } from './views/nav-menu/nav-menu.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scanner',  component: ScannerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScannerComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    BsDropdownModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
