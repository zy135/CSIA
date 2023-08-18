import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpAddsubtaskComponent } from './pop-up-addsubtask.component';

describe('PopUpAddsubtaskComponent', () => {
  let component: PopUpAddsubtaskComponent;
  let fixture: ComponentFixture<PopUpAddsubtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpAddsubtaskComponent]
    });
    fixture = TestBed.createComponent(PopUpAddsubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
