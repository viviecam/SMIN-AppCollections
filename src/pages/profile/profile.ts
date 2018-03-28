import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileEditPage } from '../profileEdit/profileEdit';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController) {

  }

  openProfileEdit(): void{
    this.navCtrl.push(ProfileEditPage);
  }

}
