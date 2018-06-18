import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../../pages/signup/signup';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }
  
  /* Bouton afficher/masquer mot de passe */
  type: string = "password";
  isActive: Boolean = false;

  getInputType() {
    return this.isActive ? 'text' : 'password';
  }

  openSignUpPage(): void{
    this.navCtrl.push(SignUpPage);
  }
  
}
