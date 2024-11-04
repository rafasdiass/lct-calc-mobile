import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultTablePage } from './result-table.page';

describe('ResultTablePage', () => {
  let component: ResultTablePage;
  let fixture: ComponentFixture<ResultTablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
