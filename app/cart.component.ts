import { Component } from 'angular2/core';
import { CDDisplayComponent } from './cd-display.component';
import { CD } from './cd.model';

@Component({
  selector: 'cart',
  inputs: ['CDs'],
  directives: [CDDisplayComponent],
  template: `
    <h3>Cart: {{CDs.length}} Items</h3>
    <cd-display *ngFor="#cd of CDs"
      [CD]="cd"
      [inCart]="true"
      (onAddRemove)="removeCD($event)">
    </cd-display>
    <h4>Total: {{getPrice()}}</h4>
    <hr>
    `
})
export class CartComponent {
  public CDs: CD[];
  getPrice() {
    if(this.CDs.length===0) {
      return 0;
    }
    var totalPrice = 0;
    for(var cd of this.CDs) {
      totalPrice += cd.price;
    }
    return totalPrice;
  }
  removeCD(cd: CD) {
    this.CDs.splice(this.CDs.indexOf(cd),1);
  }
}
