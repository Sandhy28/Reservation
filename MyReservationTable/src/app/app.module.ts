import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AddReservationComponent } from './add-reservation/add-reservation.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

const router:Routes=[
  {
    path:'',component:LoginComponent
  },
  {
    path:'Home', component:HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AddReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, BrowserAnimationsModule,MatDialogModule,MatButtonModule,MatInputModule,
    ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(router),MatTableModule,
    MatSortModule,MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
