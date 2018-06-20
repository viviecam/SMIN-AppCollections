import { Component } from '@angular/core';
import { NavController, PopoverController, NavParams} from 'ionic-angular';
import { ProfileEditPage } from '../profileEdit/profileEdit';
import { MoreProfilPage } from '../../pages/moreProfil/moreProfil';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

  myProfil:any;
  datas:any;
  id:number;
  token:string;

  constructor(public navCtrl: NavController, private popoverCtrl : PopoverController, public httpClient: HttpClient, private navParams: NavParams,) { 
    this.id = navParams.data.id;
    this.token = navParams.data.token;
    console.log(this.token)
  }

  /* Bouton afficher/masquer mot de passe */
  type: string = "password";
  isActive: Boolean = false;

  getType() {
    return this.isActive ? 'text' : 'password';
  }

  more(myEvent) {
    let popover = this.popoverCtrl.create(MoreProfilPage, {
      id: this.id,
      token: this.token,
    });
    popover.present({
      ev: myEvent,
    });
  }

  openProfileEdit(): void{
    console.log(this.token)
    this.navCtrl.push(ProfileEditPage, {
      id: this.id,
      token: this.token,
    });
  }

  openLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  ionViewWillEnter(){
      this.load();
  }

  load(){
    this.myProfil = this.httpClient.get(`https://collectionback-bricebricebricemmi.c9users.io/list/users/id/` + this.id);
    this.myProfil
    .subscribe(data => {
      console.log(data)
      this.datas = data
    })
  }
}
