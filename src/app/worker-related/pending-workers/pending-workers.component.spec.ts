import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingWorkersComponent } from './pending-workers.component';

describe('PendingWorkersComponent', () => {
  let component: PendingWorkersComponent;
  let fixture: ComponentFixture<PendingWorkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
