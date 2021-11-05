import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  postFavorite(favorite: Favorites): Observable<Favorites> {
    return this.httpClient.post<Favorites>(this.favApiUrl, favorite);
  }
  //getUserFavs(id: number) {
  
  //  if (id === )
  //}
}
