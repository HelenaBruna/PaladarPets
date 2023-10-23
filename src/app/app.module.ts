import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';

//
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { ScannerComponent } from './views/scanner/scanner.component';
import { NavMenuComponent } from './views/nav-menu/nav-menu.component';
import { LoginComponent } from './views/login/login.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ScannerServiceService } from './services/scanner-service.service';

// aqui eu estou referenciado as rotas, no caso cada rota irá aparecer um component
// por exemplo:
// a rota --> localhost:4200/scanner --> irá acessar o component scanner
import { ZXingScannerModule } from '@zxing/ngx-scanner';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scanner', component: ScannerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
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
    CarouselModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ZXingScannerModule
  ],
  providers: [ScannerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
