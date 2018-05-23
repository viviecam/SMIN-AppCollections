import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-modifier-collection',
  templateUrl: 'modifierCollection.html',
  
})
export class ModifierCollectionPage {

  constructor(public navCtrl: NavController) { }

  retour() {
    this.navCtrl.pop();
  }
  
}
