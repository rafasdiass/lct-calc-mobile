import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectSubTypePage } from './select-sub-type.page';

describe('SelectSubTypePage', () => {
  let component: SelectSubTypePage;
  let fixture: ComponentFixture<SelectSubTypePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectSubTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
