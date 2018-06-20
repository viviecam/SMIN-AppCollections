import { Component} from '@angular/core';
import { NavController, PopoverController, NavParams} from 'ionic-angular';

import { MoreSingleMSPage } from '../../pages/moreSingleMS/moreSingleMS';


@Component({
  selector: 'page-item',
  templateUrl: 'item.html'
})
export class ItemPage {

  infos:any;
  title:string;
  image:any;
  datas:any;
  from:any;

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController,  private navParams: NavParams) { 
    this.infos = navParams.get('infos');
    this.title = navParams.get('title');
    this.image = navParams.get('image');
    this.from = navParams.get('from');
    this.datas = this.infos
  }

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
