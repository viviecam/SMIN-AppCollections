import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AjouterItemPage } from '../../pages/ajouterItem/ajouterItem';
import { ModifierCollectionPage } from '../../pages/modifierCollection/modifierCollection';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-more-single',
  templateUrl: 'moreSingle.html',
  
})
export class MoreSinglePage {

	idCollec:number;
	token:string;
	infosCaracs: any;
	deleteCollec:any;

  	constructor(public navCtrl: NavController, private navParams: NavParams, public httpClient: HttpClient) {
  		this.idCollec = navParams.get('idCollec');
      	this.token = navParams.get('token');
      	this.infosCaracs = navParams.get('infosCaracs');
      	console.log(this.token)
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

  supprimerCollection(){
  	console.log(this.token)
  	console.log(this.idCollec)
  	this.deleteCollec = this.httpClient.post('https://collectionback-bricebricebricemmi.c9users.io/delete/collection/tok/' + this.token, 
    { 
      id: this.idCollec, 
    })
    this.deleteCollec
    .subscribe(data => {
      console.log(data)
    })
  }
}
