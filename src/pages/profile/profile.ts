import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { ProfileEditPage } from '../profileEdit/profileEdit';
import { MoreProfilPage } from '../../pages/moreProfil/moreProfil';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(public navCtrl: NavController, private popoverCtrl : PopoverController) {  }

  more(myEvent) {
    let popover = this.popoverCtrl.create(MoreProfilPage);
    popover.present({
      ev: myEvent
    });
  }

  openProfileEdit(): void{
    this.navCtrl.push(ProfileEditPage);
  }

}
