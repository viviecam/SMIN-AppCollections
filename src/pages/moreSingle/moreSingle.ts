import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjouterItemPage } from '../../pages/ajouterItem/ajouterItem';
import { ModifierCollectionPage } from '../../pages/modifierCollection/modifierCollection';

@Component({
  selector: 'page-more-single',
  templateUrl: 'moreSingle.html',
  
})
export class MoreSinglePage {

  constructor(public navCtrl: NavController) { }

  ajouterItem(){
    this.navCtrl.push(AjouterItemPage)
  }

  modifierCollection(){
    this.navCtrl.push(ModifierCollectionPage)
  }
}
