import { Component, EventEmitter } from 'angular2/core';
import { CD } from './cd.model';

@Component({
  selector: 'cd-display',
  inputs: ['CD', 'inCart'],
  outputs: ['onAddRemove'],
  template: `
    <div>
      {{CD.title}} {{CD.artist}} {{CD.genre}} {{CD.price}}
      <button (click)="addRemoveToCart()">{{inCart?"Remove From Cart":"Add To Cart"}}</button>
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
}
