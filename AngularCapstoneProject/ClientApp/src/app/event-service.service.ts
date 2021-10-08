import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from './Models/Events';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {
  apiUrl: string = "https://localhost:44323/api/events";

  constructor(private httpClient: HttpClient) { }

  getEvents() {
    return this.httpClient.get<Events[]>(this.apiUrl);
  }

  postEvents(events: Events) {
    return this.httpClient.post<Events>(this.apiUrl, events);
  }
}
