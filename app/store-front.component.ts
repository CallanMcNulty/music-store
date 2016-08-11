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
      <cd-display *ngFor="#cd of CDs | genre:displayGenre | artist:displayArtist"
      [CD]="cd"
      [inCart]="false"
      (onAddRemove)="addToCart($event)">
      </cd-display>
      <br>
      <label for="genre-select">Display Genre:</label>
      <select name="genre-select" (change)="chooseGenre($event.target.value)">
        <option value="All">All</option>
        <option *ngFor="#genre of getGenres()" value="{{genre}}">{{genre}}</option>
      </select>
      <input #artistSearchName placeholder="Search for an Artist">
      <button (click)="artistSearch(artistSearchName)">Search</button>
      <button *ngIf="displayArtist!='All'" (click)="cancelArtistSearch()">Cancel Search</button>
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
