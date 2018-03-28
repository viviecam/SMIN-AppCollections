import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


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

}
