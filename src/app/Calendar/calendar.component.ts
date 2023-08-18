import { Component, ViewChild } from '@angular/core';
import { Calendar, CalendarOptions, EventApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { FullCalendarComponent } from '@fullcalendar/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent {
  @ViewChild('calendar') calendar!: FullCalendarComponent;

  isWeeklyView = false;
  buttonText: String = 'Weekly';
  eventSelected: EventApi | null = null; //declaring eventSelected

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin],
    events: [
      {
        title: 'The Title',
        start: '2023-08-10',
        end: '2023-08-13',
      },
      {
        title: 'Success',
        start: '2023-08-15',
        end: '2023-08-16',
      },
    ],
    // when an event is clicked its details are taken passed on to the 'showEventDetails' function
    eventClick: (details) => {
      this.showEventDetails(details.event);
    },
    
  };

  showEventDetails(event: EventApi) {
    this.eventSelected = event;
  }

  toggleView() {
    const api = this.calendar.getApi();
    if (!this.isWeeklyView) {
      api.changeView('timeGridWeek');
      this.buttonText = 'Monthly';
      this.isWeeklyView = true;
    } else {
      api.changeView('dayGridMonth');
      this.buttonText = 'Weekly';
      this.isWeeklyView = false;
    }
  }

  
  deleteEvent() {
    if (this.eventSelected) {
      const event = this.eventSelected;
      if (event) {
        // removes the event
        event.remove();
        this.eventSelected = null;
      }
    }
  }
}
