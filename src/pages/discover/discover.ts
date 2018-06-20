import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { CollectionSinglePage } from '../../pages/collectionSingle/collectionSingle';


@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

	collections:any;
	datas:any;
	id:number;


  	constructor(public navCtrl: NavController, public httpClient: HttpClient, private navParams: NavParams) {  
  		this.id = navParams.data.id;
  	}

	ionViewWillEnter(){
    	this.load();
 	}

 	openCollectionSingle(id, name): void{
	    console.log(id)
	    this.navCtrl.push(CollectionSinglePage, {
	      	id: id,
	      	name: name,
	      	from: 'discover'
	    });
	}

 	load(){
	    this.collections = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/list/random/user/` + this.id);
	    console.log(this.collections)
	    this.collections
	    .subscribe(data => {
	      this.datas = data
	      console.log(data)
	    })
 	}
}






	

