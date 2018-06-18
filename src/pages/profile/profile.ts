import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { ProfileEditPage } from '../profileEdit/profileEdit';
import { MoreProfilPage } from '../../pages/moreProfil/moreProfil';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  myProfil:any;
  datas:any;

  constructor(public navCtrl: NavController, private popoverCtrl : PopoverController, public httpClient: HttpClient) {  }

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

  ionViewWillEnter(){
      this.load();
  }

  load(){
    this.myProfil = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/list/users/id/1`);
    this.myProfil
    .subscribe(data => {
      console.log(data)
      this.datas = data
    })
  }

}
