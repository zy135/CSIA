import { NgModule } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TaskComponent } from './task/task.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AddTaskComponent } from './task/add-task/add-task.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { TaskListComponent } from './task/task-list/task-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {NgFor} from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import { PopUpComponent } from './task/pop-up-addtask/pop-up.component';
import { MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {MatMenuModule} from '@angular/material/menu';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';
import { PopUpAddsubtaskComponent } from './task/pop-up-addsubtask/pop-up-addsubtask.component';
import { PopUpEditTaskComponent } from './task/pop-up-edit-task/pop-up-edit-task.component';
import { PopUpEditSubtaskComponent } from './task/pop-up-edit-subtask/pop-up-edit-subtask.component';
import { CalendarComponent } from './Calendar/calendar.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({  
  declarations: [
    AppComponent,
    NavBarComponent,
    TaskComponent,
    AddTaskComponent,
    TaskListComponent,
    PopUpComponent,
    PopUpAddsubtaskComponent,
    PopUpEditTaskComponent,
    PopUpEditSubtaskComponent,
    InventoryComponent,
    CalendarComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    DragDropModule,
    FlexLayoutModule,
    CdkDropListGroup, CdkDropList,
     CdkDrag,NgFor,
     MatButtonToggleModule,
     FormsModule, 
     MatChipsModule,
     MatProgressBarModule,
     MatInputModule,
     MatFormFieldModule,
     MatDialogModule,
     MatIconModule,
     MatDatepickerModule,
     MatNativeDateModule,
     ReactiveFormsModule,
     MatSelectModule,
     MatCardModule,
     HttpClientModule,
     MatMenuModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}