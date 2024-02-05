import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './navbar/navbar.component';
import { BookListComponent } from './books/books.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[NavBarComponent, BookListComponent]
})
export class AppComponent {
  title = 'Amazon';
}
