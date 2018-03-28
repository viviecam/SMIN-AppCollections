import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjouterItemPage } from '../../pages/ajouterItem/ajouterItem';
import { ModifierItemPage } from '../../pages/modifierItem/modifierItem';

@Component({
  selector: 'page-more-single',
  templateUrl: 'moreSingle.html',
  
})
export class MoreSinglePage {

  constructor(public navCtrl: NavController) { }

  ajouterItem(){
    this.navCtrl.push(AjouterItemPage)
  }

  modifierItem(){
    this.navCtrl.push(ModifierItemPage)
  }
}
