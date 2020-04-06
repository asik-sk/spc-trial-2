import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartProvider } from '../../providers/cart/cart';
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  itemsToShow: any [];
  total: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cartService: CartProvider) {
  }

  ionViewDidLoad() {
    this.total = 0;
    console.log('ionViewDidLoad CheckoutPage');
    this.itemsToShow = this.cartService.getAllCartItems();
    this.itemsToShow.forEach(element => {
      this.total += (element.price * element.quantity);
    });
  }



}
