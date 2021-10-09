import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from './Models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  apiUrl: string = "https://localhost:44323/api/events";

  constructor(private httpClient: HttpClient) { }

  getEvents() {
    return this.httpClient.get<Event[]>(this.apiUrl);
  }

  postEvent(events: Event) {
    return this.httpClient.post<Event>(this.apiUrl, event);
  }

  }
