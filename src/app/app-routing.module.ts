import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './Calendar/calendar.component';
import { InventoryComponent } from './inventory/inventory.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'calendar', component: CalendarComponent },
  { path: 'inventory', component: InventoryComponent},
  { path: 'task', component: TaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
