import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {IBook, Book} from '../book'

@Component({
  selector: 'app-books',
  standalone: true,
  imports:[
    CommonModule
  ],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BookListComponent implements OnInit {
  public bookList: Array<IBook>  = [];
  public currentBook: number=-1;

  ngOnInit(): void {
    this.bookList=[
      new Book(1, 'War And Peace Paperback – 1 April 2015', 'Leo Tolstoy', 'https://m.media-amazon.com/images/I/71eK3ri8ROL._SY466_.jpg', 4.5, 25,534, "War and Peace (1869) is a novel that follows the lives of several aristocratic families during the French invasion of Russia and the Napoleonic Wars. It explores themes of love, war, politics, and the human condition, and is considered one of the great works of literature."),
      new Book(2, 'Julius Caesar Paperback – 10 August 2017', ' William Shakespeare', 'https://m.media-amazon.com/images/I/51LOeNnnBIL._AC_UY327_FMwebp_QL65_.jpg', 4.5, 25,678, "Jealous conspirators convince Caesar's friend Brutus to join their assassination plot against Caesar. To stop Caesar from gaining too much power, Brutus and the conspirators kill him on the Ides of March. Mark Antony drives the conspirators out of Rome and fights them in a battle."),
      new Book(3, 'Othello Paperback – 15 December 2017', ' William Shakespeare', 'https://m.media-amazon.com/images/I/71au41jaQlL._SY466_.jpg', 4.5, 25, 730, "Iago is furious about being overlooked for promotion and plots to take revenge against his General: Othello, the Moor of Venice. Iago manipulates Othello into believing his wife Desdemona is unfaithful, stirring Othello's jealousy. Othello allows jealousy to consume him, murders Desdemona, and then kills himself."),
      new Book(4, 'Macbeth Paperback – 1 November 2016', ' William Shakespeare', 'https://m.media-amazon.com/images/I/51EwEqnnuVL._SY466_.jpg', 4.5, 25, 424, "Macbeth is a tragedy by William Shakespeare. It is thought to have been first performed in 1606. It dramatises the damaging physical and psychological effects of political ambition on those who seek power."),
    ]
  }
  public showBookDetails(id:number): void{
    this.currentBook=id;
  }
}
