import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {

  nom: string = "";
  prenom: string = "";
  pseudo: string = "";
  email: string = "";
  password1: string = "";
  password2:string = "";


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private toastCtrl: ToastController,
    public httpClient: HttpClient,) {
  }
  
  /* Bouton afficher/masquer mot de passe */
  type: string = "password";
  isActive: Boolean = false;
  connexion: any;

  getInputType() {
    return this.isActive ? 'text' : 'password';
  }

  signup(){
    if (this.nom !== "" && this.prenom !== "" && this.pseudo !== "" && this.email !== "" && this.password1 !== "" && this.password2 !== ""){
      if (this.password1 === this.password2){
        this.connexion = this.httpClient.post('https://collectionback-bricebricebricemmi.c9users.io/new/user', 
        { 
          firstname: this.prenom,
          name: this.nom,
          pseudo: this.pseudo,
          email: this.email,
          password: this.password1
        })
        this.connexion
        .subscribe(data => {
          if(data){
            this.openLoginPage();
          } else {
            this.presentToastError();
          }
        })
      } else {
        this.presentToastPassword();
      }
    } else {
      this.presentToastEmpty();
    }
  }

  openLoginPage(): void{
    this.navCtrl.push(LoginPage);
  }

  presentToastEmpty() {
    let toast = this.toastCtrl.create({
      message: 'Merci de remplir tous les champs.',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  presentToastPassword() {
    let toast = this.toastCtrl.create({
      message: 'Les mots de passe ne correspondent pas.',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  presentToastError() {
    let toast = this.toastCtrl.create({
      message: 'Erreur interne du serveur',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  
}
