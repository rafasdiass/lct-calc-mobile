import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorNotificationPage } from './error-notification.page';

describe('ErrorNotificationPage', () => {
  let component: ErrorNotificationPage;
  let fixture: ComponentFixture<ErrorNotificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorNotificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
