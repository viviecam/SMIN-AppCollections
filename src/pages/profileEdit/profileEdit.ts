import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profileEdit.html',
})
export class ProfileEditPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform
  ) { }

  /* Bouton afficher/masquer mot de passe */
  type: string = "text";
  isActive: Boolean = false;

  getInputType() {
    return this.isActive ? 'password' : 'text';
  }

  /* Retour à la page du profil */
  retourProfilePage() {
    this.navCtrl.pop();
  }

  /* iOS : Affiche l'action sheet pour modifier l'avatar du profil */
  showActionSheetChangeAvatar() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modifier votre avatar',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Prendre une photo',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            console.log('Take a photo clicked');
          }
        },
        {
          text: 'Choisir une photo',
          icon: !this.platform.is('ios') ? 'images' : null,
          handler: () => {
            console.log('Choose a photo clicked');

          }
        }, {
          text: 'Supprimer l\'avatar',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete avatar clicked');
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
