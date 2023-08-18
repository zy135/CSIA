import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ObjectUnsubscribedError, Observable, tap } from 'rxjs';
import { Task, SubTask } from '../task/task-list/task-list.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskSubject: BehaviorSubject<any>=new BehaviorSubject<any>([]);
  tasks:Observable<any>=this.taskSubject.asObservable();

  constructor(private http:HttpClient) {
    this.getAllTask()
      .subscribe({
        next:data=>{
          this.taskSubject.next(data)
          this.tasksArray=data;
        },
        error: err=> console.log(err),
      })
   }

   tasksArray!:Task[];
 
   createTask(Task:Partial<Task>):Observable<Task> {
    const header = new HttpHeaders();
    header.set('Content-Type','application/json')
    return this.http.post ("http://localhost:8080/task/create",Task,{headers:header})
    .pipe(
      tap (data => {
        this.tasksArray.push(data)
        this.taskSubject.next(this.tasksArray)
      })
    )
   }

  private getAllTask():Observable<any>{
    return this.http.get("http://localhost:8080/task/task-list");
  }

  /*
  createSubTask(SubTask:Partial<SubTask>){
    const header = new HttpHeaders();
    header.set('Content-Type','application/json')
    return this.http.post ("http://localhost:8080/task/create",SubTask,{headers:header})
    .pipe(
      tap (data => {
        this.tasksArray.push(data)
        this.taskSubject.next(this.tasksArray)
      })
    )
  }*/
}
