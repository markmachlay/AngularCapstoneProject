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

  addEvent(eventName: string, eventDate: Date) {
    let event = new Events();
    console.log(eventName);
    console.log(eventDate);
    event.eventName = eventName;
    event.eventDate = eventDate;

    this.eventService.postEvent(event).subscribe(result =>
    {
      console.log(result);
    //}, (error: Response) =>
    //{
    //  if (error.status === 404) {
    //    console.log('Not found');
    //    alert('Not found');
    //  }

    //  if (error.status === 500) {

    //  }
    //  console.log(error.json);
    });
  }

}
