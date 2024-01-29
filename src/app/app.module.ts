import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookListComponent } from './books/books.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NavBarComponent,
    BookListComponent
  ],
  bootstrap:[
    AppComponent
  ]
})
export class AppModule { }
