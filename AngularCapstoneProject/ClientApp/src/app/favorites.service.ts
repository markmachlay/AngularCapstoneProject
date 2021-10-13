import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventServiceService } from './event-service.service';
import { Events } from './Models/Events';
import { Favorites } from './Models/Favorites';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  //apiUrl: string = "https://localhost:44323/api/Events";
  favApiUrl: string = "https://localhost:44323/api/Favorites";
  //userFavorites: Favorites[];
  constructor(private httpClient: HttpClient) { }

  getFavorites() {
    return this.httpClient.get<Favorites[]>(this.favApiUrl);
  }

  //getUserFavs(id: number) {
  
  //  if (id === )
  //}
}
