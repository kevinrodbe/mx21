import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { CarritoComponent } from './carrito/carrito.component';
import { BannerComponent } from './shared/banner/banner.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Mx21' }
  },
  {
    path: 'detalle:id',
    component: HomeComponent,
    data: { title: 'Mx21' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Mx21' }
  },
  {
    path: 'carrito',
    component: CarritoComponent,
    data: { title: 'Mx21' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    CarritoComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
