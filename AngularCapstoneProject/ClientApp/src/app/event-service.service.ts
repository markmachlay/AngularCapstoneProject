import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Events } from './Models/Events';
import { Favorites } from './Models/Favorites';

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  apiUrl: string = "https://localhost:44323/api/Events";
  favApiUrl: string = "https://localhost:44323/api/Favorites";

  constructor(private httpClient: HttpClient) { }

  getEvents() {
    return this.httpClient.get<Events[]>(this.apiUrl);
  }

  postEvent(event: Events): Observable<Events> {
    return this.httpClient.post<Events>(this.apiUrl, event);
  }

  }
