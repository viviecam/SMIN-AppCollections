import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-modifier-item',
  templateUrl: 'modifierItem.html',
  
})
export class ModifierItemPage {

  constructor(public navCtrl: NavController) { }

  retour() {
    this.navCtrl.pop();
  }
  
}
