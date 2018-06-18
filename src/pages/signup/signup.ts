import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {

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

  openLoginPage(): void{
    this.navCtrl.push(LoginPage);
  }
  
}
