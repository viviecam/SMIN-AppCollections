import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, PopoverController, NavParams } from 'ionic-angular';

import { ModifierItemPage } from '../../pages/modifierItem/modifierItem';

@Component({
  selector: 'page-more-singleMS',
  templateUrl: 'moreSingleMS.html',
  
})
export class MoreSingleMSPage {

  constructor(public navCtrl: NavController) { }

  modifierItem(){
    this.navCtrl.push(ModifierItemPage)
  }
}
