import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventServiceService } from '../event-service.service';
import { FavoritesService } from '../favorites.service';
import { Events } from '../Models/Events';
import { filter } from 'rxjs/operators';
import { Favorites } from '../Models/Favorites';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  events!: Events[];
  favorites!: Favorites[];
  constructor(private eventService: EventServiceService, private favoritesService: FavoritesService, private route: ActivatedRoute) { }

  ngOnInit() {
    //this.eventService.getFavorites().subscribe(result => { this.events = result; })
    let evId;
    this.route.paramMap
      .subscribe(params => {
        let id = Number(params.get('id'));
        this.favoritesService.getFavorites()
          .subscribe(result => {
            this.favorites = result.filter(x => x.userId == id);
            evId = result.forEach(y => y.eventId = evId);
            this.eventService.getEvents().subscribe(result => {
              this.events = result.filter(y => y.eventId == evId);
            })
          })
        
      })
    //this.eventService.getEvents().subscribe(result => {
    //  let id = Number[]
    //  this.events = result.filter(x => x.eventId == );
    //})
  }

}
