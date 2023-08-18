import {
  CdkDragDrop,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { TaskService } from 'src/app/service/task.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpAddsubtaskComponent } from '../pop-up-addsubtask/pop-up-addsubtask.component';
import { PopUpEditTaskComponent } from '../pop-up-edit-task/pop-up-edit-task.component';
import { PopUpEditSubtaskComponent } from '../pop-up-edit-subtask/pop-up-edit-subtask.component';
import { MatMenuTrigger } from '@angular/material/menu';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

// defining structure of Task object
 export interface Task {
  mainTask?: string;
  expanded?: boolean;
  type?: string;
  dueDate?: string;
  description?: string;
  estimatedTime?: number;
  timeSpent?: number;
  id?: number;
  subTaskList?: SubTask[];

}

// Defining structure of Subtask object
 export interface SubTask {
  title?: string;
  description?: string;
  dueDate?: string;
  estimatedTime?: number;
  timeSpent?: number;
  expanded?: boolean;
  mainTaskId?: number;
}

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})

export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    /*
      {
      mainTask: 'Finish CS IA',
      subTaskList: [
        {
          title: 'Subtask 1',
          description: 'Subtask 1 description',
          dueDate: '12/31/2023',
          estimatedTime: 5,
          timeSpent: 4,
          expanded: false,
          mainTaskId:1,
        },   
        {
          title: 'Subtask 2',
          description: 'Subtask 2 description',
          dueDate: '12/31/2023',
          estimatedTime: 5,
          timeSpent: 2,
          expanded: false,
          mainTaskId:1,
        },      
      ],
      expanded: false,
      type: 'Work',
      dueDate: "5/2/40",
      description: "ahdsahdsfsdffsdf",
      estimatedTime: 10,
      timeSpent: 3,
      id: 1,
    },
    {
      mainTask: 'Finish EE',
      subTaskList: [
        {
          title: 'Subtask 1',
          description: 'Subtask 1 description',
          dueDate: '12/31/2023',
          estimatedTime: 5,
          timeSpent: 2,
          expanded: false,
          mainTaskId:2,

        }, ] ,
      expanded: false,
      type: 'Work',
      dueDate: "1/2/40",
      description: "ahdsfsahdsfsdfahdsfsdfahdsfsdfahdsfsdfahdsfsdfahdsfsdfdf",
      estimatedTime: 10,
      timeSpent: 4,
      id: 2,
    },
    {
      mainTask: 'Get to wwerwert',
      subTaskList: [
        {
          title: 'Subtask 1',
          description: 'Subtask 1 description',
          dueDate: '12/31/2023',
          estimatedTime: 5,
          timeSpent: 2,
          expanded: false,
          mainTaskId:3,
        }, ] ,
      expanded: false,
      type: 'Personal',
      dueDate: "7/2/40",
      description: "aksljd faklsjd fklj askldjfakl sdjfkljslkd jfklsjd l kfdlk jfklsd klf sdlkjf skdjf kdj kd jfk k hi my name is Zheng Yu this is for test purpose for text wrapping blah b lah blah blah hiasd hih ih i how is this workings",
      estimatedTime: 10,
      timeSpent: 2.5,
      id:3,
    },
    */
    

  ]


  ngOnInit(): void {
    this.tasksService.tasks.subscribe({
      next:data => this.tasks = data
    })
  }

  constructor (private tasksService:TaskService,public dialog: MatDialog){

  }

// Calculating the progress of the task
calculateTaskProgress(task: Task): number {
  const estimatedT = task.estimatedTime ?? 1;
  return (task?.timeSpent as number / estimatedT) * 100;
};

// Making the task appear when their type is selected

selectedOption!: string ;  // default option (every task appears)

// Method checking if the the correct tasks are being displayed
filteredTasks(): Task[] { 
  return this.selectedOption === 'All'
    ? this.tasks
    : this.tasks.filter(task => task.type === this.selectedOption);
}

// the property will hold the tasks that will be displayed
filteredTask: Task[] = this.filteredTasks();
// when a new task type is clicked, the selectedOption and filteredTask is updated so that the tasks corresponding with the task type is displayed
set selectedOptionValue(option: string) {
  this.selectedOption = option;
  this.filteredTask = this.filteredTasks();
}
  
  toggleSubtasks(task: Task) {
    task.expanded = !task.expanded;
  }

  toggleSubtasksDescription(SubTask: SubTask) {
    SubTask.expanded = !SubTask.expanded;
  }

  calculateSubtaskProgress(SubTask: SubTask): number {
    const estimatedT = SubTask.estimatedTime ?? 1;
    return (SubTask?.timeSpent as number / estimatedT) * 100;
  };
  
  drop(event: CdkDragDrop<Task[]>) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    editTask(code:any){
      console.log(code)
    }
   
    @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger | undefined;
    closeMenu(){
      this.trigger?.closeMenu();
    }

  
  // pop up when Add Subtask is clicked
    data: SubTask = {
      title: "",
      description: "",
      dueDate: "",
      estimatedTime: 0,
      timeSpent: 0,
      expanded: false,
      mainTaskId: 0,
    };

    openSubTask:boolean =false;


    openSubTaskDialog(): void {
      if (this.openSubTask){
        return
      }

      this.closeMenu();
      this.openSubTask = true;
      const dialogRef = this.dialog.open(PopUpAddsubtaskComponent, {
        enterAnimationDuration:'400ms',
        exitAnimationDuration:'400ms', 
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.openSubTask = false;  
      });
    }

  // pop up when edit task is clicked
  openEditTask:boolean =false;

  openEditTaskDialog(task:Task): void {
    if (this.openEditTask){
      return
    }

    this.closeMenu();
    this.openEditTask = true;
    const dialogRef = this.dialog.open(PopUpEditTaskComponent, {
      enterAnimationDuration:'400ms',
      exitAnimationDuration:'400ms',
      data:task,

    });

    dialogRef.afterClosed().subscribe((editedTask : Task) => {
      this.openEditTask = false;  
      console.log(editedTask);
    });
  }

  //pop up when edit subTask is Clicked
  openEditSubtask:boolean = false;

  openEditSubtaskDialog(SubTask:SubTask): void {
    if (this.openEditSubtask){
      return
    }
    this.openEditSubtask = true;
    const dialogRef = this.dialog.open(PopUpEditSubtaskComponent, {
      enterAnimationDuration:'400ms',
      exitAnimationDuration:'400ms',
      data:SubTask,

    });

    dialogRef.afterClosed().subscribe((editedSubtask : SubTask) => {
      this.openEditSubtask = false;  
      console.log(editedSubtask);
    });
  }

}
