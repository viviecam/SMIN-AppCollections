import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { CollectionSinglePage } from '../../pages/collectionSingle/collectionSingle';


@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

	collections:any;
	datas:any;


  constructor(public navCtrl: NavController, public httpClient: HttpClient) {  

  }

	ionViewWillEnter(){
    	this.load();
 	}

 	openCollectionSingle(): void{
	    this.navCtrl.push(CollectionSinglePage);
	}

 	load(){
	    this.collections = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/list/collections`);
	    console.log(this.collections)
	    this.collections
	    .subscribe(data => {
	      this.datas = data
	    })
 	}
}






	

