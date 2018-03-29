import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profileEdit.html'
})
export class ProfileEditPage {

  constructor(public navCtrl: NavController) {  }

  retourProfilePage() {
    this.navCtrl.pop();
  }

}
