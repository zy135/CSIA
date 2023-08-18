import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up-addtask/pop-up.component';
import { Task } from '../task-list/task-list.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  clicked:boolean =false;

  constructor(public dialog: MatDialog) {}

  data: Task = {
    dueDate: '',
    description: '',
    mainTask: '',
    expanded: false,
    type: '',
    estimatedTime: 0,
    timeSpent: 0,
    id: 0,
    subTaskList: []
  };

  openTaskDialog(): void {
    if (this.clicked){
      return
    }


    this.clicked = true;
    const dialogRef = this.dialog.open(PopUpComponent, {
      enterAnimationDuration:'400ms',
      exitAnimationDuration:'400ms',

    });

    dialogRef.afterClosed().subscribe(result => {
      this.clicked = false;  
    });
  }
}

