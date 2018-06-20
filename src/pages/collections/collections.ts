import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


import { CollectionSinglePage } from '../../pages/collectionSingle/collectionSingle';
import { AjouterPage } from '../../pages/ajouter/ajouter';

@Component({
  	selector: 'page-collections',
  	templateUrl: 'collections.html'
})
export class CollectionsPage {

  collections:any;
  datas:any;
  id:number;
  token:string;

  constructor(public navCtrl: NavController, public httpClient: HttpClient, private navParams: NavParams) {  
    this.id = navParams.data.id;
    this.token = navParams.data.token;
    console.log(navParams.data)
  }

  openCollectionSingle(id, name): void{
    console.log(name)
    this.navCtrl.push(CollectionSinglePage, {
      id: id,
      name: name,
      from: 'collections'
    });
  }


	ionViewWillEnter(){
    	this.load();
 	}

 	load(){
    this.collections = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/list/collections/user/` + this.id);
    console.log(this.collections)
    this.collections
    .subscribe(data => {
      console.log(data)
      this.datas = data
    })
 	}

  ajouter(): void{
    console.log(this.id)
    this.navCtrl.push(AjouterPage, {
      id: this.id,
      token: this.token,
    });
}
}
