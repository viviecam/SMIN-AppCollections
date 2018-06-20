import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CollectionsPage } from '../collections/collections';
import { SearchPage } from '../search/search';
import { DiscoverPage } from '../discover/discover';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

	infos:any;

	constructor(public navCtrl: NavController, private navParams: NavParams) {  
    this.infos = {
    	id: navParams.get('id'),
    	token: navParams.get('token'),
    }
    console.log(navParams.get('token'))
  }

  tab1Root = CollectionsPage;
  tab2Root = SearchPage;
  tab3Root = DiscoverPage;
  tab4Root = ProfilePage;

}
