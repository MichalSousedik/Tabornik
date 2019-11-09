import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyFoodComponent } from './copy-food.component';

describe('CopyFoodComponent', () => {
  let component: CopyFoodComponent;
  let fixture: ComponentFixture<CopyFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
