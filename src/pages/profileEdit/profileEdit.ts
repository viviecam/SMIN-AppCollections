import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, NavParams, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-profile-edit',
  templateUrl: 'profileEdit.html',
})
export class ProfileEditPage {

  id:number;
  token:string;

  constructor(
    public navCtrl: NavController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private camera: Camera,
    private transfer: FileTransfer, 
    private file: File,
    public httpClient: HttpClient,
    private navParams: NavParams,
    private toastCtrl: ToastController,
  ) { 
    this.id = navParams.get('id');
    this.token = navParams.get('token');
    console.log(this.token)
  }

  fileTransfer: FileTransferObject = this.transfer.create();

  /* Bouton afficher/masquer mot de passe */
  type: string = "text";
  isActive: Boolean = false;
  base64Image: any;
  changeImage: any;

  getInputType() {
    return this.isActive ? 'password' : 'text';
  }

  /* Retour à la page du profil */
  retourProfilePage() {
    this.navCtrl.pop();
  }

  /* Affiche l'action sheet pour modifier l'avatar du profil */
  showActionSheetChangeAvatar() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modifier votre avatar',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Prendre une photo',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
            let id = Math.random().toString(36).substr(2, 16);
            let options = {
              quality: 50,
              encodingType: this.camera.EncodingType.JPEG,
              correctOrientation: true,
              targetWidth: 300,
              targetHeight: 300
            };
            this.camera.getPicture(options).then((imageData) => {
            const fileTransfer: FileTransferObject = this.transfer.create();
            let options1: FileUploadOptions = {
               fileKey: 'file',
               fileName: id + '.jpg',
               headers: {}
            }
            fileTransfer.upload(imageData, 'https://collectionback-bricebricebricemmi.c9users.io/update/image/tok/test', options1)
             .then((data) => {
               console.log(data)
               alert("success");
             }, (err) => {
               // error
               alert("error"+JSON.stringify(err));
             });
            });
             /*this.changeImage = this.httpClient.post('https://collectionback-bricebricebricemmi.c9users.io/changeImage', 
              { 
                image: id,
                id: this.id
              })
              this.changeImage
              .subscribe(data => {
                console.log('ok');
              })*/
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
            // console.log('Delete avatar clicked');
          }
        }, {
          text: 'Annuler',
          role: 'cancel',
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            // console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
