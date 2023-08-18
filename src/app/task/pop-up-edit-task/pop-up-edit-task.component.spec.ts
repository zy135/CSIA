import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditTaskComponent } from './pop-up-edit-task.component';

describe('PopUpEditTaskComponent', () => {
  let component: PopUpEditTaskComponent;
  let fixture: ComponentFixture<PopUpEditTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpEditTaskComponent]
    });
    fixture = TestBed.createComponent(PopUpEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
