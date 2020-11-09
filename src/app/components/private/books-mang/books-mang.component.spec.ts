import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksMangComponent } from './books-mang.component';

describe('BooksMangComponent', () => {
  let component: BooksMangComponent;
  let fixture: ComponentFixture<BooksMangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksMangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksMangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
