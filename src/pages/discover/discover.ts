import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  constructor(public navCtrl: NavController, public httpClient: HttpClient) {  

  }

	ionViewWillEnter(){
    	this.load();
 	}

 	load(){
	    this.collections = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/?action=list&fonction=collections`);
	    console.log(this.collections)
	    this.collections
	    .subscribe(data => {
	      this.datas = data
	    })
 	}
}






	

