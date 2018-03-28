import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ItemPage } from '../../pages/item/item';

@Component({
  selector: 'page-collection-single',
  templateUrl: 'collectionSingle.html',
  providers: [NavController]
})
export class CollectionSinglePage {

  constructor(public navCtrl: NavController, private navParams: NavParams) { 
  	let id = navParams.get('id');
  	console.log(id)
  }

  retourMesColl(): void {
    this.navCtrl.pop();
  }

  openItem(): void{
    this.navCtrl.push(ItemPage)
  }
}
