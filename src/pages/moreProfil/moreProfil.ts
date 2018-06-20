import { Component } from '@angular/core';
import { NavController, PopoverController, NavParams} from 'ionic-angular';
import { AjouterItemPage } from '../../pages/ajouterItem/ajouterItem';
import { ProfileEditPage } from '../../pages/profileEdit/profileEdit';

@Component({
  selector: 'page-more-profil',
  templateUrl: 'moreProfil.html',
  
})
export class MoreProfilPage {

	token:any;
	id:number;;

  constructor(public navCtrl: NavController, private navParams: NavParams,) {
  	this.id = navParams.get('id');
    this.token = navParams.get('token');
    console.log(this.token)
  }

  openProfileEdit(): void{
    console.log(this.token)
    this.navCtrl.push(ProfileEditPage, {
      id: this.id,
      token: this.token,
    });
  }
}
