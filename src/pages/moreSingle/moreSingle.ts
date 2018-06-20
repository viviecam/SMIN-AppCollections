import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AjouterItemPage } from '../../pages/ajouterItem/ajouterItem';
import { ModifierCollectionPage } from '../../pages/modifierCollection/modifierCollection';

@Component({
  selector: 'page-more-single',
  templateUrl: 'moreSingle.html',
  
})
export class MoreSinglePage {

	idCollec:number;
	token:string;
	infosCaracs: any;

  	constructor(public navCtrl: NavController, private navParams: NavParams) {
  		this.idCollec = navParams.get('idCollec');
      	this.token = navParams.get('token');
      	this.infosCaracs = navParams.get('infosCaracs');
      	console.log(this.idCollec)
    }

  ajouterItem(){
    this.navCtrl.push(AjouterItemPage, {
        idCollec: this.idCollec,
        token: this.token,
        infosCaracs: this.infosCaracs,
    });
  }

  modifierCollection(){
    this.navCtrl.push(ModifierCollectionPage)
  }
}
