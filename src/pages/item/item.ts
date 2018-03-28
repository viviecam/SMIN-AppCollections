import { Component} from '@angular/core';
import { NavController, PopoverController} from 'ionic-angular';

import { MoreSingleMSPage } from '../../pages/moreSingleMS/moreSingleMS';


@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) { }

  retour(){
    this.navCtrl.pop();
  }

  more(myEvent) {
    let popover = this.popoverCtrl.create(MoreSingleMSPage);
    popover.present({
      ev: myEvent
    });
  }
}
