import { Component } from 'angular2/core';
import { StoreFrontComponent } from './store-front.component';
import { CartComponent } from './cart.component';
import { CD } from './cd.model';

@Component({
  selector: 'my-app',
  directives: [StoreFrontComponent, CartComponent],
  template: `
    <div class = "container">
      <h1>Music Store</h1>
      <store-front [CDs]="allCDs" (onAdd)="addToCart($event)"></store-front>
      <cart [CDs]="cartCDs"></cart>
    </div>
    `
})
export class AppComponent {
  public allCDs: CD[];
  public cartCDs: CD[];
  constructor() {
    this.allCDs = [
      new CD("Last Kind Words / Skinny Leg Blues","Geeshie Wiley","Blues",2500),
      new CD("Demon Days","Gorillaz","Hip-Hop",1000),
      new CD("Plastic Beach","Gorillaz","Hip-Hop",900),
      new CD("HELP","The Beatles","Rock",700),
      new CD("The Beatles","The Beatles","Rock",700),
      new CD("My Beautiful Dark Twisted Fantasy","Kanye West","Hip-Hop",1500)
    ];
    this.cartCDs = [];
  }
  addToCart(cd: CD) {
    this.cartCDs.push(cd);
  }
}
