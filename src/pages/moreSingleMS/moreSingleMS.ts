import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AjouterItemPage } from '../../pages/ajouterItem/ajouterItem';
import { ModifierCollectionPage } from '../../pages/modifierCollection/modifierCollection';
import { HttpClient } from '@angular/common/http';

import { ModifierItemPage } from '../../pages/modifierItem/modifierItem';

@Component({
  selector: 'page-more-singleMS',
  templateUrl: 'moreSingleMS.html',
  
})
export class MoreSingleMSPage {

  constructor(public navCtrl: NavController, public httpClient: HttpClient, private navParams: NavParams) { }

  modifierItem(){
    this.navCtrl.push(ModifierItemPage)
  }

  deleteItem(){

  }
}
