import { Component, EventEmitter } from 'angular2/core';
import { CDDisplayComponent } from './cd-display.component';
import { GenrePipe } from './genre.pipe';
import { ArtistPipe } from './artist.pipe';
import { CD } from './cd.model';

@Component({
  selector: 'store-front',
  inputs: ['CDs'],
  outputs: ['onAdd'],
  pipes: [GenrePipe, ArtistPipe],
  directives: [CDDisplayComponent],
  template: `
    <hr>
    <h3>Available{{displayArtist==="All"?"":": "+displayArtist}}</h3>
    <div class="store-front-list">
      <cd-display class="row" *ngFor="#cd of CDs | genre:displayGenre | artist:displayArtist"
      [CD]="cd"
      [inCart]="false"
      (onAddRemove)="addToCart($event)">
      </cd-display>
    </div>
    <hr>
    <br>
    <label for="genre-select">Display Genre:</label>
    <select class="form-control" name="genre-select" (change)="chooseGenre($event.target.value)">
      <option value="All">All</option>
      <option *ngFor="#genre of getGenres()" value="{{genre}}">{{genre}}</option>
    </select>
    <label for="search-artist">Search for an Artist:</label>
    <input class="form-control" #artistSearchName name="search-artist">
    <button class="btn btn-sm" (click)="artistSearch(artistSearchName)">Search</button>
    <button class="btn btn-sm" *ngIf="displayArtist!='All'" (click)="cancelArtistSearch()">Cancel Search</button>
    <hr>
    `
})
export class StoreFrontComponent {
  public onAdd: EventEmitter<CD>;
  public displayGenre = "All";
  public displayArtist = "All";
  public CDs: CD[];
  constructor() {
    this.onAdd = new EventEmitter();
  }
  getGenres(): string[] {
    var genres = [];
    for(var cd of this.CDs) {
      if(genres.indexOf(cd.genre)===-1) {
        genres.push(cd.genre);
      }
    }
    return genres;
  }
  addToCart(cd: CD) {
    this.onAdd.emit(cd);
  }
  chooseGenre(genre: string) {
    this.displayGenre = genre;
  }
  artistSearch(artist: HTMLInputElement) {
    this.displayArtist = artist.value;
    artist.value = "";
  }
  cancelArtistSearch() {
    this.displayArtist = "All";
  }
}
