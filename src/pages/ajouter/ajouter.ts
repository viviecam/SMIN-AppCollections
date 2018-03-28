import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-ajouter',
  templateUrl: 'ajouter.html',
  
})
export class AjouterPage {

  constructor(public navCtrl: NavController) { }

  retour() {
    this.navCtrl.pop();
  }
  
}
