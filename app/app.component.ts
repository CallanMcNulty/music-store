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
      <store-front class="form-inline" [CDs]="allCDs" (onAdd)="addToCart($event)"></store-front>
      <cart [CDs]="cartCDs"></cart>
    </div>
    `
})
export class AppComponent {
  public allCDs: CD[];
  public cartCDs: CD[];
  constructor() {
    this.allCDs = [
      new CD("The Times They Are a-Changin'","Bob Dylan","Folk",1500),
      new CD("Highway 61 Revisited","Bob Dylan","Folk",1500),
      new CD("The Basement Tapes","Bob Dylan","Folk",2500),
      new CD("Gorillaz","Gorillaz","Rock",1000),
      new CD("Demon Days","Gorillaz","Rock",1000),
      new CD("Plastic Beach","Gorillaz","Pop",900),
      new CD("The Fall","Gorillaz","Electronic",900),
      new CD("Surrealistic Pillow","Jefferson Airplane","Rock",1000),
      new CD("HELP","The Beatles","Rock",900),
      new CD("Abbey Road","The Beatles","Rock",1000),
      new CD("Sgt. Pepper's Lonely Hearts Club Band","The Beatles","Rock",700),
      new CD("The Beatles","The Beatles","Rock",700),
      new CD("My Beautiful Dark Twisted Fantasy","Kanye West","Hip-Hop",1500)
    ];
    this.cartCDs = [];
  }
  addToCart(cd: CD) {
    this.cartCDs.push(cd);
  }
}
