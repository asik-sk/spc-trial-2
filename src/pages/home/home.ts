import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { CheckoutPage } from '../checkout/checkout';
import { CategoryPage } from '../category/category';
import { LoginPage } from '../login/login';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild(Slides) slides: Slides;
	categoryList: any[];
	public toggled: boolean = false;

	constructor(public navCtrl: NavController) {
		this.categoryList = ["Fruits", "Vegetables", "Fish"];
		this.toggled = false;
	}

	goToCart() {
		this.navCtrl.push(CheckoutPage);
	}

	slideClick() {
		let currentIndex = this.slides.getActiveIndex();
		// let theClickedIndex = this.slides.clickedIndex;
		console.log('clicked on slide ', currentIndex);
		console.log(this.categoryList[currentIndex]);
		this.navCtrl.push(CategoryPage, {
			item: { title: this.categoryList[currentIndex] }
		});
	}

	login(){
		console.log("hi");
		this.navCtrl.push(LoginPage);
	}

    public toggle(): void {
       this.toggled = !this.toggled;
    }

}
