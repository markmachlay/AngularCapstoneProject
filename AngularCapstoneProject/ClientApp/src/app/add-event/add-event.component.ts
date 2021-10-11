import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { Events } from '../Models/Events';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  event: Events;
  constructor(private eventService: EventServiceService) { }

  ngOnInit() {
  }

  addEvent(eventName: string,
    eventDate: Date,
    admission: number,
    details: any)
  {

    let event = new Events();
    event.eventName = eventName;
    event.eventDate = eventDate;
    event.admission = admission;
    event.details = details;

    this.eventService.postEvent(event)
      .subscribe(result => {
        console.log(result)
      });
  }

}
