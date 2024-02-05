import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './books.component';
import { By } from '@angular/platform-browser';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call showBookDetails when a book is clicked', () => {
    const showBookDetailsSpy = spyOn(component, 'showBookDetails');
    const bookElements = fixture.debugElement.queryAll(By.css('.book'));
    bookElements[0].triggerEventHandler('click', null);
    expect(showBookDetailsSpy).toHaveBeenCalledWith(0);
 });
  
});
