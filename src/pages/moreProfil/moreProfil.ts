import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AjouterItemPage } from '../../pages/ajouterItem/ajouterItem';
import { ProfileEditPage } from '../../pages/profileEdit/profileEdit';

@Component({
  selector: 'page-more-profil',
  templateUrl: 'moreProfil.html',
  
})
export class MoreProfilPage {

  constructor(public navCtrl: NavController) { }

  ajouterItem(){
    this.navCtrl.push(AjouterItemPage)
  }

  openProfileEdit(): void{
    this.navCtrl.push(ProfileEditPage);
  }
}
