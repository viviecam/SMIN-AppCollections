import { Component} from '@angular/core';
import { NavController, PopoverController} from 'ionic-angular';

import { MoreSinglePage } from '../../pages/moreSingle/moreSingle';
import { ItemPage } from '../../pages/item/item';

@Component({
  selector: 'page-collection-single',
  templateUrl: 'collectionSingle.html',
/*  providers: [NavController]
})
export class CollectionSinglePage {

  constructor(public navCtrl: NavController, private navParams: NavParams) { 
  	let id = navParams.get('id');
  	console.log(id)
  }*/

  
})
export class CollectionSinglePage {
  
  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) { }

  retourMesColl(): void {
    this.navCtrl.pop();
  }

  openItem(): void {
    this.navCtrl.push(ItemPage)
  }

  more(myEvent) {
    let popover = this.popoverCtrl.create(MoreSinglePage);
    popover.present({
      ev: myEvent
    });
  }
}
