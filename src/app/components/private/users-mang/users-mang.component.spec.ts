import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersMangComponent } from './users-mang.component';

describe('UsersMangComponent', () => {
  let component: UsersMangComponent;
  let fixture: ComponentFixture<UsersMangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersMangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersMangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
