import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendingComponent } from './attending.component';

describe('AttendingComponent', () => {
  let component: AttendingComponent;
  let fixture: ComponentFixture<AttendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
