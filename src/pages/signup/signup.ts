import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';


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
    public navParams: NavParams) {
  }
  
  /* Bouton afficher/masquer mot de passe */
  type: string = "password";
  isActive: Boolean = false;

  getInputType() {
    return this.isActive ? 'text' : 'password';
  }

  signup(){
    if (this.nom !== "" && this.prenom !== "" && this.pseudo !== "" && this.email !== "" && this.password1 !== "" && this.password2 !== ""){
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
        console.log(data)
      })
    } else {
      console.log("tous les champs doivent être remplis")
    }
  }

  openLoginPage(): void{
    this.navCtrl.push(LoginPage);
  }
  
}
