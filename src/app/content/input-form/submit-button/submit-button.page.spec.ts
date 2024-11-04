import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubmitButtonPage } from './submit-button.page';

describe('SubmitButtonPage', () => {
  let component: SubmitButtonPage;
  let fixture: ComponentFixture<SubmitButtonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitButtonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
