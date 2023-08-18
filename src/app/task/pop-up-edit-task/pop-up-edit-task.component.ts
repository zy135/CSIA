import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Task } from '../task-list/task-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pop-up-edit-task',
  templateUrl: './pop-up-edit-task.component.html',
  styleUrls: ['./pop-up-edit-task.component.css']
})
export class PopUpEditTaskComponent {
  editTaskForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopUpEditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task, 
    private builder: FormBuilder,
    private http: HttpClient,
  ) {
      this.editTaskForm = this.builder.group({
        mainTask: new FormControl(data.mainTask),
        dueDate: new FormControl(data.dueDate? new Date(data.dueDate):null),
        description: new FormControl(data.description),
        estimatedTime: new FormControl(data.estimatedTime),
        timeSpent: new FormControl(data.timeSpent),
        type: new FormControl(data.type),
      });
    } 

  closePopUp(): void {
    this.dialogRef.close();
  }

  saveTask(): void {
    this.dialogRef.close();

    if (this.editTaskForm.valid) {
      const taskValue = this.editTaskForm.value;
      const task: Task = {
        mainTask: taskValue.mainTask as string,
        type: taskValue.type as string,
        dueDate: taskValue.dueDate as string,
        description: taskValue.description as string,
        estimatedTime: taskValue.estimatedTime as number,
        timeSpent: taskValue.timeSpent as number,

      }
      console.log(taskValue);
      // make http request and save the data on the server
    }
  }

}



