import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodDetailComponent } from './edit-food-detail.component';

describe('EditFoodDetailComponent', () => {
  let component: EditFoodDetailComponent;
  let fixture: ComponentFixture<EditFoodDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFoodDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
