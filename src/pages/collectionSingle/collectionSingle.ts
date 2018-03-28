import { Component} from '@angular/core';
import { NavController, PopoverController} from 'ionic-angular';

import { MoreSinglePage } from '../../pages/moreSingle/moreSingle';
import { ItemPage } from '../../pages/item/item';

@Component({
  selector: 'page-collection-single',
  templateUrl: 'collectionSingle.html',
  
})
export class CollectionSinglePage {
  
  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) { }

  retour() {
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
