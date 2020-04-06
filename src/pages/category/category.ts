import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { CartProvider } from '../../providers/cart/cart';

@IonicPage()
@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {
  selectedCategory: any;
  obj = {
    Category: [
      {
        CategoryName: 'Fruits',
        items: [
          {
            name: 'Apple',
            price: 500,
            quantity: 0
          },
          {
            name: 'Mango',
            price: 300,
            quantity: 0
          },
          {
            name: 'Guava',
            price: 200,
            quantity: 0
          },
          {
            name: 'Banana',
            price: 150,
            quantity: 0
          },
          {
            name: 'Coconut',
            price: 100,
            quantity: 0
          }
        ]
      },
      {
        CategoryName: 'Vegetables',
        items: [
          {
            name: 'Onion',
            price: 500,
            quantity: 0
          },
          {
            name: 'Potato',
            price: 300,
            quantity: 0
          },
          {
            name: 'Capsicum',
            price: 200,
            quantity: 0
          },
          {
            name: 'Garlic',
            price: 150,
            quantity: 0
          },
          {
            name: 'Tomato',
            price: 100,
            quantity: 0
          }
        ]
      },
      {
        CategoryName: 'Fish',
        items: [
          {
            name: 'Katla',
            price: 500,
            quantity: 0
          },
          {
            name: 'Rui',
            price: 300,
            quantity: 0
          },
          {
            name: 'Ilish',
            price: 200,
            quantity: 0
          },
          {
            name: 'Prawn',
            price: 150,
            quantity: 0
          },
          {
            name: 'Pomfret',
            price: 100,
            quantity: 0
          }
        ]
      }
    ]
  }
  itemsToShow: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController, private cartService: CartProvider) {
    this.selectedCategory = navParams.get('item');
    this.itemsToShow = [];
    console.log(this.selectedCategory);
    // console.log(this.obj.Category);
    this.obj.Category.forEach((obj) => {      
      if(obj.CategoryName == this.selectedCategory.title){
        console.log(obj);
        this.itemsToShow = obj.items;
      }
    });

    for (let i = 0; i < 10; i++) {
      this.itemsToShow.push({
        name: 'Apple',
        price: 500});
    }
  }

  ionViewWillEnter(){
    console.log('ionViewWillLoad CategoryPage');
    // console.log(this.selectedCategory);
    // console.log(this.obj);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // console.log(item);
    // this.navCtrl.push(ProductPage, {
    //   item: item
    // });
    this.cartService.addToCart({name: item.name, price: item.price, quantity: item.quantity});
    this.presentToast();
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.itemsToShow.push({
          name: 'Apple',
          price: 500});
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Product was added successfully to cart',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  goToCart(){
    this.navCtrl.push(CheckoutPage);
  }

}
