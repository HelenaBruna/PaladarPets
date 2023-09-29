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
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';

// aqui eu estou referenciado as rotas, no caso cada rota irá aparecer um component
// por exemplo:
// a rota --> localhost:4200/scanner --> irá acessar o component scanner

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scanner',  component: ScannerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ScannerComponent,
    NavMenuComponent,
    LoginComponent,
    CadastroComponent
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
