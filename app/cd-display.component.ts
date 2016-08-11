import { Component, EventEmitter } from 'angular2/core';
import { CD } from './cd.model';

@Component({
  selector: 'cd-display',
  inputs: ['CD', 'inCart'],
  outputs: ['onAddRemove'],
  template: `
    <hr>
    <div class="col-sm-6">
      <h4>{{CD.title}}</h4>
      <p>{{CD.artist}}: {{CD.genre}}</p>
    </div>
    <div class="col-sm-3">
      <h3 class="cd-price">{{moneyFormat(CD.price)}}</h3>
    </div>
    <div class="col-sm-3">
      <button class="btn btn-primary col-sm-2" (click)="addRemoveToCart()">{{inCart?"Remove From Cart":"Add To Cart"}}</button>
    </div>
    `
})
export class CDDisplayComponent {
  public onAddRemove: EventEmitter<CD>;
  public CD: CD;
  public inCart: boolean;
  constructor() {
    this.onAddRemove = new EventEmitter();
  }
  addRemoveToCart() {
    this.onAddRemove.emit(this.CD);
  }
  moneyFormat(pennies: number): string {
    return "$"+(pennies/100).toFixed(2).toString();
  }
}
