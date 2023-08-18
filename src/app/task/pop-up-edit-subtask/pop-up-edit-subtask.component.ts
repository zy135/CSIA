import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SubTask } from '../task-list/task-list.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pop-up-edit-subtask',
  templateUrl: './pop-up-edit-subtask.component.html',
  styleUrls: ['./pop-up-edit-subtask.component.css']
})
export class PopUpEditSubtaskComponent {
  editSubtaskForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<PopUpEditSubtaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SubTask,
    private builder: FormBuilder,
    private http: HttpClient,
  ){
    this.editSubtaskForm = this.builder.group({
      title: new FormControl(data.title),
      dueDate: new FormControl(data.dueDate? new Date(data.dueDate):null),
      description: new FormControl(data.description),
      estimatedTime: new FormControl(data.estimatedTime),
      timeSpent: new FormControl(data.timeSpent),
    })
  }

  closePopUp(): void {
    this.dialogRef.close();
  }

  saveTask(): void {
    this.dialogRef.close();

    if (this.editSubtaskForm.valid) {
      const taskValue = this.editSubtaskForm.value;
      const subtask: SubTask = {
        title: taskValue.title as string,
        dueDate: taskValue.dueDate as string,
        description: taskValue.description as string,
        estimatedTime: taskValue.estimatedTime as number,
        timeSpent: taskValue.timeSpent as number,
        expanded: false,
        mainTaskId: 0
      }
      console.log(taskValue);
      // make http request and save the data on the server
    }
  }

}
