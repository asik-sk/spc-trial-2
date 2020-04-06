// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CartProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartProvider {
  // cartItem: any;
  cart: any;
  itemToAdd: Array<{name: string, price: number, quantity: number}>;

  // constructor(public http: HttpClient) {
    constructor() {
    console.log('Hello CartProvider Provider');
    this.cart = [];
  }

  addToCart(item){
    this.cart.push({name: item.name, price: item.price, quantity: item.quantity});
  }

  getAllCartItems(){
    return this.cart;
  }

}
