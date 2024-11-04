import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingIndicatorPage } from './loading-indicator.page';

describe('LoadingIndicatorPage', () => {
  let component: LoadingIndicatorPage;
  let fixture: ComponentFixture<LoadingIndicatorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingIndicatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
