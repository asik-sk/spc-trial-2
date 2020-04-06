import { Component } from '@angular/core';
import { NavController, NavParams }from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, icon: string}>;
  CategoryList: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies<ion-icon name="basket"></ion-icon>
    this.icons = ['leaf', 'nutrition', 'basket'];
    this.CategoryList = ['Fruits', 'Vegetables', 'Fish'];

    this.items = [];
    for (let i = 0; i < 3; i++) {
      this.items.push({
        title: this.CategoryList[i],
        icon: this.icons[i]
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    // console.log(item);
    this.navCtrl.push(CategoryPage, {
      item: item
    });
  }
}
