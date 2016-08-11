import { Component, EventEmitter } from 'angular2/core';
import { CDDisplayComponent } from './cd-display.component';
import { CD } from './cd.model';

@Component({
  selector: 'store-front',
  inputs: ['CDs'],
  outputs: ['onAdd'],
  directives: [CDDisplayComponent],
  template: `
    <hr>
      <h3>Available</h3>
      <cd-display *ngFor="#cd of CDs"
        [CD]="cd"
        [inCart]="false"
        (onAddRemove)="addToCart($event)">
      </cd-display>
    <hr>
    `
})
export class StoreFrontComponent {
  public onAdd: EventEmitter<CD>;
  public CDs: CD[];
  constructor() {
    this.onAdd = new EventEmitter();
  }
  addToCart(cd: CD) {
    this.onAdd.emit(cd);
  }
}
