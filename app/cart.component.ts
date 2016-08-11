import { Component } from 'angular2/core';
import { CDDisplayComponent } from './cd-display.component';
import { CD } from './cd.model';

@Component({
  selector: 'cart',
  inputs: ['CDs'],
  directives: [CDDisplayComponent],
  template: `
    <h3>Cart: {{CDs.length}} Items</h3>
    <div class="cart-list">
      <cd-display class="row" *ngFor="#cd of CDs"
        [CD]="cd"
        [inCart]="true"
        (onAddRemove)="removeCD($event)">
      </cd-display>
    </div>
    <hr>
    <h4>Total: {{getPrice()}}</h4>
    <hr>
    `
})
export class CartComponent {
  public CDs: CD[];
  getPrice(): string {
    var priceCalculator = new CDDisplayComponent();
    if(this.CDs.length===0) {
      return priceCalculator.moneyFormat(0);
    }
    var totalPrice = 0;
    for(var cd of this.CDs) {
      totalPrice += cd.price;
    }
    return priceCalculator.moneyFormat(totalPrice);
  }
  removeCD(cd: CD) {
    this.CDs.splice(this.CDs.indexOf(cd),1);
  }
}
