import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

	search:string;
	collections:any;
	datas:any;
  	constructor(public navCtrl: NavController,  public httpClient: HttpClient) {

  	}

  	onSearch(){
	  	this.collections = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/list/recherche/string/` + this.search);
	    	this.collections
	    	.subscribe(data => {
	      		this.datas = data
	      		console.log(data)
	    	})
		}

	}
