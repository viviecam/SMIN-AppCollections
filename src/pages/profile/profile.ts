import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { ProfileEditPage } from '../profileEdit/profileEdit';
import { MoreProfilPage } from '../../pages/moreProfil/moreProfil';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController, 
    private popoverCtrl : PopoverController) {  }

  /* Bouton afficher/masquer mot de passe */
  type: string = "password";
  isActive: Boolean = false;

  getType() {
    return this.isActive ? 'text' : 'password';
  }

  more(myEvent) {
    let popover = this.popoverCtrl.create(MoreProfilPage);
    popover.present({
      ev: myEvent
    });
  }

  openProfileEdit(): void{
    this.navCtrl.push(ProfileEditPage);
  }

  openLoginPage(): void{
    this.navCtrl.push(LoginPage);
  }

}
