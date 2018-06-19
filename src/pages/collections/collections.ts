import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {  
  }

  openCollectionSingle(id, name): void{
    console.log(name)
    this.navCtrl.push(CollectionSinglePage, {
      id: id,
      name: name,
    });
  }


	ionViewWillEnter(){
    	this.load();
 	}

 	load(){
    this.collections = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/list/collections/user/1`);
    console.log(this.collections)
    this.collections
    .subscribe(data => {
      console.log(data)
      this.datas = data
    })
 	}

  ajouter(): void{
    this.navCtrl.push(AjouterPage);
  }
}
