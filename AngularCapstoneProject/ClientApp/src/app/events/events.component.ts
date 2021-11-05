import { Component, OnInit } from '@angular/core';
import { AddFavoriteComponent } from '../add-favorite/add-favorite.component';
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
  userId: number;

  //currentEvent: Events = {
  //  eventId: 0,
  //  eventName: '',
  //  eventDate: ,
  //  admission: 0,
  //  details: '',
  //}
  constructor(private eventService: EventServiceService, private addFavoriteService: AddFavoriteComponent) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(result => { this.events = result; })
  }

  acceptUserId(id: number) {
    let userId = id;
  }

  addFavorite(id: number) {
    this.addFavoriteService.addFavorite(id, this.userId);
  }

  formatDetails() {

  }
}
