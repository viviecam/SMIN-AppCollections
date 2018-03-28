import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CollectionSinglePage } from '../../pages/collectionSingle/collectionSingle';


@Component({
  selector: 'page-discover',
  templateUrl: 'discover.html'
})
export class DiscoverPage {

  constructor(public navCtrl: NavController) {  }
  
  openCollectionSingle(): void{
    this.navCtrl.push(CollectionSinglePage);
  }
}
