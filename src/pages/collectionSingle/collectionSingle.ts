import { Component} from '@angular/core';
import { NavController, PopoverController, NavParams} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

import { MoreSinglePage } from '../../pages/moreSingle/moreSingle';
import { ItemPage } from '../../pages/item/item';

@Component({
  selector: 'page-collection-single',
  templateUrl: 'collectionSingle.html',
  /*
})
export class CollectionSinglePage {

  constructor(public navCtrl: NavController, private navParams: NavParams) { 
  	let id = navParams.get('id');
  	console.log(id)
  }*/

  
})
export class CollectionSinglePage {
  
  id:number;
  items:any;
  datas:any;

  	constructor(public navCtrl: NavController, private popoverCtrl: PopoverController, private navParams: NavParams, public httpClient: HttpClient) {
  		this.id = navParams.get('id');
  	}

  	ionViewWillEnter(){
    	this.load();
 	}

  	retour() {
    this.navCtrl.pop();
  }

  	openItem(infos, title, image): void {
    	this.navCtrl.push(ItemPage, {
        infos: infos,
        title: title,
        image: image
      });
  	}

  	more(myEvent) {
	    let popover = this.popoverCtrl.create(MoreSinglePage);
	    popover.present({
	      	ev: myEvent
	    });
  	}

  	load(){
	    this.items = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/list/datas/id/${this.id}`);
	    this.items
	    .subscribe(data => {
          console.log(data.collections[0].items[0])
          console.log(data.collections[0].items[1].caracteristiques)
      		this.datas = data.collections[0].items
    	})
 	}
}