import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFoodDetailComponent } from './add-food-detail.component';

describe('AddFoodDetailComponent', () => {
  let component: AddFoodDetailComponent;
  let fixture: ComponentFixture<AddFoodDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFoodDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
