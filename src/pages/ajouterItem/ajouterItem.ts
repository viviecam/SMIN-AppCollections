import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, Platform, NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-ajouter-item',
  templateUrl: 'ajouterItem.html',
  
})
export class AjouterItemPage {

  idCollec:number;
  token:string;
  values:Array<any> = [];
  value:Array<string> = [];
  infosCaracs: any;
  changeInfos:any;
  nameCollec:string;
  idImage:string;
  img1:any;
  options1: FileUploadOptions;
  fileTransfer: FileTransferObject;

  constructor(
    public navCtrl: NavController,
    private transfer: FileTransfer,
    private camera: Camera,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform, 
    private navParams: NavParams, 
    public httpClient: HttpClient) { 
      this.idCollec = navParams.get('idCollec');
      this.token = navParams.get('token');
      this.infosCaracs = navParams.get('infosCaracs');
      console.log(this.idCollec)
    }

  retour() {
    this.navCtrl.pop();
  }

  valChange(value:string, index:number, title:string, id:number):void{
    this.values[index] = {/*caracData: title, */caracData: value, caracId: id}
    this.value[index] = value;
  }
  
  /* Affiche l'action sheet pour modifier l'image de l'item */
  showActionSheetLoadItemImage() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Image de l\'item',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Prendre une photo',
          icon: !this.platform.is('ios') ? 'image' : null,
          handler: () => {
           this.idImage = Math.random().toString(36).substr(2, 16);
            let options = {
              quality: 50,
              encodingType: this.camera.EncodingType.JPEG,
              correctOrientation: true,
              targetWidth: 300,
              targetHeight: 300
            };
            this.camera.getPicture(options).then((imageData) => {
              this.fileTransfer = this.transfer.create();
              this.options1 = {
                 fileKey: 'file',
                 fileName: this.idImage + '.jpg',
                 headers: {}
              }
              this.img1 = imageData;
              console.log(this.img1)
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

  addItem(){
    console.log(this.idCollec)
    console.log(this.nameCollec)
    console.log(this.idImage)
    console.log(this.values)
      this.changeInfos = this.httpClient.post('https://collectionback-bricebricebricemmi.c9users.io/new/item/tok/' + this.token, 
        { 
          id: this.idCollec, 
          title: this.nameCollec, 
          image: this.idImage + '.jpg',
          carac: this.values,
        })
        this.changeInfos
        .subscribe(data => {
          console.log(data)
        })

        this.fileTransfer.upload(this.img1, 'https://collectionback-bricebricebricemmi.c9users.io/update/image/tok/test', this.options1)
         .then((data) => {
           console.log(data)
           alert("success");
           this.navCtrl.pop();
         }, (err) => {
           // error
           alert("error"+JSON.stringify(err));
         });
  }
}
