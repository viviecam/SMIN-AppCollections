import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-ajouter-item',
  templateUrl: 'ajouterItem.html',
  
})
export class AjouterItemPage {

  constructor(public navCtrl: NavController) { }

  retour() {
    this.navCtrl.pop();
  }
  
}
