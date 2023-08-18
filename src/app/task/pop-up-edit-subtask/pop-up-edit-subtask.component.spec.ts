import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditSubtaskComponent } from './pop-up-edit-subtask.component';

describe('PopUpEditSubtaskComponent', () => {
  let component: PopUpEditSubtaskComponent;
  let fixture: ComponentFixture<PopUpEditSubtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpEditSubtaskComponent]
    });
    fixture = TestBed.createComponent(PopUpEditSubtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
