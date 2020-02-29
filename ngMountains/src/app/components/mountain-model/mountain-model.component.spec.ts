import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MountainModelComponent } from './mountain-model.component';

describe('MountainModelComponent', () => {
  let component: MountainModelComponent;
  let fixture: ComponentFixture<MountainModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MountainModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MountainModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
