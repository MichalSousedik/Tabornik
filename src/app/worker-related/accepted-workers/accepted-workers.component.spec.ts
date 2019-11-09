import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedWorkersComponent } from './accepted-workers.component';

describe('AcceptedWorkersComponent', () => {
  let component: AcceptedWorkersComponent;
  let fixture: ComponentFixture<AcceptedWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptedWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
