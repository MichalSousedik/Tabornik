import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyChildrenComponent } from './copy-children.component';

describe('CopyChildrenComponent', () => {
  let component: CopyChildrenComponent;
  let fixture: ComponentFixture<CopyChildrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyChildrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
