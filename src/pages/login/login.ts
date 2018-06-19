import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignUpPage } from '../../pages/signup/signup';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpClient: HttpClient) {
  }
  
  /* Bouton afficher/masquer mot de passe */
  type: string = "password";
  isActive: Boolean = false;

  getInputType() {
    return this.isActive ? 'text' : 'password';
  }

  connect(){
/*    this.connexion = this.httpClient.post('https://collectionback-bricebricebricemmi.c9users.io/connexion', 
    { 
      password: 
    })
    this.connexion
    .subscribe(data => {
      console.log(data)
    })*/
  }

  openSignUpPage(): void{
    this.navCtrl.push(SignUpPage);
  }
  
}
