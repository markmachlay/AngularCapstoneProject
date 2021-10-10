import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { Event } from '../Models/Event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  events: Event[];
  constructor(private eventService: EventServiceService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(result => { this.events = result; })
  }

}
