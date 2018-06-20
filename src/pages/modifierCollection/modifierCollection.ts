import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, Platform } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';



@Component({
  selector: 'page-modifier-collection',
  templateUrl: 'modifierCollection.html',
  
})
export class ModifierCollectionPage {

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    private transfer: FileTransfer,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public platform: Platform) { }

  retour() {
    this.navCtrl.pop();
  }

  /* Affiche l'action sheet pour modifier l'avatar du profil */
  showActionSheetLoadCollectionImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Photo générale de la collection',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Prendre une photo',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            // this.camera.getPicture(this.options).then((imageData) => {
            //  this.base64Image = 'data:image/jpeg;base64,' + imageData;
            // }, (err) => {
            // });
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
          // this.fileTransfer.upload('<file path>', '<api endpoint>', options)
          //  .then((data) => {
          //    // success
          //  }, (err) => {
          //    // error
          //  })
          }
        }, {
          text: 'Supprimer la photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            // console.log('Delete avatar clicked');
          }
        }, {
          text: 'Annuler',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }
  
}
