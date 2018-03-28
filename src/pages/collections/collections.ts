import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


import { CollectionSinglePage } from '../../pages/collectionSingle/collectionSingle';

@Component({
  	selector: 'page-collections',
  	templateUrl: 'collections.html'
})
export class CollectionsPage {



  constructor(public navCtrl: NavController) {  }

  openCollectionSingle(): void{
    this.navCtrl.push(CollectionSinglePage);
  }


	ionViewWillEnter(){
    	this.load();
 	}

 	load(){
    this.collections = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/?action=list&fonction=collections&id=${1}`);
    console.log(this.collections)
    this.collections
    .subscribe(data => {
      this.datas = data
    })
 	}
}
