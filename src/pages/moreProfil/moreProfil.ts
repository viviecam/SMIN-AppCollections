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
	id:number;
	pseudo: string;
	name:string;
	firstname:string;
	email:string;

  constructor(public navCtrl: NavController, private navParams: NavParams,) {
  	this.id = navParams.get('id');
    this.token = navParams.get('token');
    this.pseudo = navParams.get('pseudo');
    this.name = navParams.get('name');
    this.firstname = navParams.get('firstname');
    this.email = navParams.get('email');
    console.log(this.pseudo)
    console.log(this.email)
  }

  openProfileEdit(): void{
    console.log(this.token)
    this.navCtrl.push(ProfileEditPage, {
      id: this.id,
      token: this.token,
      pseudo:this.pseudo,
      name: this.name,
      firstname: this.firstname,
      email: this.email,
    });
  }
}
