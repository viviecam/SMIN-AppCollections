import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { SignUpPage } from '../../pages/signup/signup';
import { HttpClient } from '@angular/common/http';

import { TabsPage } from '../../pages/tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string = "";
  password: string = "";
  connexion: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public httpClient: HttpClient) {
  }
  
  /* Bouton afficher/masquer mot de passe */
  type: string = "password";
  isActive: Boolean = false;

  getInputType() {
    return this.isActive ? 'text' : 'password';
  }

  connect(){
    this.connexion = this.httpClient.post('https://collectionback-bricebricebricemmi.c9users.io/connexion', 
    { 
      email: this.email,
      password: this.password
    })
    this.connexion
    .subscribe(data => {
      console.log(data)
      if (data !== "null"){
        this.navCtrl.push(TabsPage, {
          id: data.id,
          token: data.jwt,
        });
      } else {
        this.presentToast()
      }
    })
  }

  openSignUpPage(): void{
    this.navCtrl.push(SignUpPage);
  }
  
  /* Toast as error messages */
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Email ou mot de passe incorrect.',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
