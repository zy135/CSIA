import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task, SubTask } from '../task-list/task-list.component';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-pop-up-addsubtask',
  templateUrl: './pop-up-addsubtask.component.html',
  styleUrls: ['./pop-up-addsubtask.component.css']
})
export class PopUpAddsubtaskComponent {
  constructor(
    public dialogRef: MatDialogRef<PopUpAddsubtaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubTask,
    @Inject(MAT_DIALOG_DATA) public data2: Task,
    private buildr: FormBuilder,
    private http: HttpClient,
    private taskService: TaskService,

  ) {
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  subTaskForm = this.buildr.group({
    title: this.buildr.control(''),
    description: this.buildr.control(''),
    dueDate: this.buildr.control(''),
    estimatedTime: this.buildr.control(''),
    timeSpent: this.buildr.control(''),
  });



  saveTask(): void {
    this.dialogRef.close();
    if (this.subTaskForm.valid) {
      const formData = this.subTaskForm.value;
      console.log(formData);
      // make http request and save the data on the server
    }

    if (this.subTaskForm.valid) {
      const subTaskValue = this.subTaskForm.value;
      const SubTask: SubTask = {
        title: subTaskValue.title as string,
        description: subTaskValue.description as string,
        dueDate: subTaskValue.dueDate as string,
        estimatedTime: subTaskValue.estimatedTime as unknown as number,
        timeSpent: subTaskValue.timeSpent as unknown as number,
      }

    }
  }

}
