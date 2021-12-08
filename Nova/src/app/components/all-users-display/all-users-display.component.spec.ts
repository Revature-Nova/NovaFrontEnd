import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AllUsersDisplayComponent} from './all-users-display.component';

describe('AllUsersDisplayComponent', () => {
  let component: AllUsersDisplayComponent;
  let fixture: ComponentFixture<AllUsersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUsersDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllUsersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
