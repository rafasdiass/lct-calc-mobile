import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectCalculationTypePage } from './select-calculation-type.page';

describe('SelectCalculationTypePage', () => {
  let component: SelectCalculationTypePage;
  let fixture: ComponentFixture<SelectCalculationTypePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectCalculationTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
