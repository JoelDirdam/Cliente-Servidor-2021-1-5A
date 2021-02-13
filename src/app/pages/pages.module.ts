import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
    NotfoundComponent
  ],
  exports: [
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
