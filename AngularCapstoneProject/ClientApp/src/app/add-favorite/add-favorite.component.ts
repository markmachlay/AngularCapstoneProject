import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service';
import { Favorites } from '../Models/Favorites';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css']
})
export class AddFavoriteComponent implements OnInit {

  constructor(private favoriteService: FavoritesService) { }

  ngOnInit() {
  }


  addFavorite(eventId: number, userId: number) {
    let favorite = new Favorites();
    favorite.eventId = eventId;
    favorite.userId = userId;

    this.favoriteService.postFavorite(favorite)
      .subscribe(result => {
        console.log(result)
      });
  }

}
