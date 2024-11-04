import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraphDisplayPage } from './graph-display.page';

describe('GraphDisplayPage', () => {
  let component: GraphDisplayPage;
  let fixture: ComponentFixture<GraphDisplayPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
