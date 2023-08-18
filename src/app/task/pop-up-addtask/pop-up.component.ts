import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task } from '../task-list/task-list.component';
import {FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent {
  
  editdata: any;
  constructor(
    public dialogRef: MatDialogRef<PopUpComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task,
    private builder: FormBuilder,
    private http: HttpClient,
    private taskService: TaskService,
  ) {}

  closePopUp(): void {
    this.dialogRef.close();
  }

  taskForm = this.builder.group({
    mainTask:[''],
    dueDate:[''],
    type:[''],
    timeSpent:[0],
    description:[''],
    estimatedTime:[0],

    /*
    mainTask:this.buildr.control(''),
    type:this.buildr.control(''),
    dueDate:this.buildr.control(''),
    description:this.buildr.control(''),
    estimatedTime:this.buildr.control(''),
    timeSpent:this.buildr.control(''),*/
  });

  /*
   */

  saveTask():void{
    this.dialogRef.close();

    if (this.taskForm.valid) {
      const taskValue=this.taskForm.value;
      const task:Task = {
        mainTask:taskValue.mainTask as string,
        type: taskValue.type as string,
        dueDate: taskValue.dueDate as string,
        description: taskValue.description as string,
        estimatedTime: taskValue.estimatedTime as number,
        timeSpent: taskValue.timeSpent as number,        
      }
      this.taskService.createTask(task)
      .subscribe({
        next:data => console.log(data),
        error: err => console.log(err),
        complete:() => console.log("success"),
      })  }
  }

}
