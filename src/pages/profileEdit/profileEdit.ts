import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profileEdit.html',
})
export class ProfileEditPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private camera: Camera,
    private transfer: FileTransfer, 
    private file: File
  ) { }

  fileTransfer: FileTransferObject = this.transfer.create();

  options: CameraOptions = {
    quality: 50,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth: 300,
    targetHeight: 300
  }

  /* Bouton afficher/masquer mot de passe */
  type: string = "text";
  isActive: Boolean = false;
  base64Image: any;

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
            this.camera.getPicture(this.options).then((imageData) => {
             // imageData is either a base64 encoded string or a file URI
             // If it's base64:
             this.base64Image = 'data:image/jpeg;base64,' + imageData;
            }, (err) => {
             // Handle error
            });
          }
        },
        {
          text: 'Choisir une photo',
          icon: !this.platform.is('ios') ? 'images' : null,
          handler: () => {
            let options: FileUploadOptions = {
             fileKey: 'file',
             fileName: 'name.jpg',
             headers: {}
          }

          this.fileTransfer.upload('<file path>', '<api endpoint>', options)
           .then((data) => {
             // success
           }, (err) => {
             // error
           })
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
