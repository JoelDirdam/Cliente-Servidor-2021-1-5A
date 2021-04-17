import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { PagesComponent } from './pages/pages.component';
import { PromesaComponent } from './pages/promesa/promesa.component';

const roules: Routes = [
{ path: '', 
component: PagesComponent,
children: [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'promesa', component: PromesaComponent },
  { path: 'observable', component: ObservableComponent },
  { path: '', pathMatch: 'full', redirectTo: '/home' }
]
},
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(roules)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
