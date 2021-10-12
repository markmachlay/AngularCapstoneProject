import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { Events } from '../Models/Events';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  //eventTitle!: string;
  //eventDetails!: string;
  events!: Events[];

  //currentEvent: Events = {
  //  eventId: 0,
  //  eventName: '',
  //  eventDate: ,
  //  admission: 0,
  //  details: '',
  //}
  constructor(private eventService: EventServiceService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(result => { this.events = result; })
  }

}
