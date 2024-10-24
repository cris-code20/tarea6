import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SexNamePage } from './sex-name.page';

describe('SexNamePage', () => {
  let component: SexNamePage;
  let fixture: ComponentFixture<SexNamePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SexNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
