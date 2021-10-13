import { Component, OnInit } from '@angular/core';
import { Favorites } from '../Models/Favorites';

@Component({
  selector: 'app-add-favorite',
  templateUrl: './add-favorite.component.html',
  styleUrls: ['./add-favorite.component.css']
})
export class AddFavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  addFavorite(eventId: number, userId: number) {
    let favorite = new Favorites();

  }

}
