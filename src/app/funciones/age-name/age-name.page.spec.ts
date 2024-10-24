import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeNamePage } from './age-name.page';

describe('AgeNamePage', () => {
  let component: AgeNamePage;
  let fixture: ComponentFixture<AgeNamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
