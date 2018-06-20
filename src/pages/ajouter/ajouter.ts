import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController, ActionSheetController, Platform, NavParams } from 'ionic-angular';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-ajouter',
  templateUrl: 'ajouter.html',
  
})
export class AjouterPage {

	carac: string = "";
	nameCollec: string = "";
	descCollec: string = "";
	currentCarac = [];
	imageURI:any;
	imageFileName:any;
	myStyle:string;
	img1:any = "";
  image:any;
  id: number;
  token: string;
  idImage: string;
  changeInfos: any;
  options1: FileUploadOptions;
  fileTransfer: FileTransferObject;

	constructor(public navCtrl: NavController,
  	private transfer: FileTransfer,
  	private camera: Camera,
  	public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private navParams: NavParams,
    public httpClient: HttpClient,
    public toastCtrl: ToastController) {
		this.currentCarac = []
    this.id = navParams.get('id');
    this.token = navParams.get('token');
	}

  addCaract(){
  	if (this.carac != ""){
	  	this.currentCarac.push(
	  		this.carac
	  	)
	  	this.carac = ""
	  	this.myStyle = "test"
	}
  	console.log(this.currentCarac)
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

/*  getImage() {
	  const options: CameraOptions = {
	    quality: 100,
	    destinationType: this.camera.DestinationType.FILE_URI,
	    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
	  }

	  this.camera.getPicture(options).then((imageData) => {
	    this.imageURI = imageData;
	  }, (err) => {
	    console.log(err);
	    this.presentToast(err);
	  });
	}

	uploadFile() {
  let loader = this.loadingCtrl.create({
    content: "Uploading..."
  });
  loader.present();
  const fileTransfer: FileTransferObject = this.transfer.create();

  let options: FileUploadOptions = {
    fileKey: 'ionicfile',
    fileName: 'ionicfile',
    chunkedMode: false,
    mimeType: "image/jpeg",
    headers: {}
  }

  fileTransfer.upload(this.imageURI, 'http://192.168.0.7:8080/api/uploadImage', options)
    .then((data) => {
    console.log(data+" Uploaded Successfully");
    this.imageFileName = "http://192.168.0.7:8080/static/images/ionicfile.jpg"
    loader.dismiss();
    this.presentToast("Image uploaded successfully");
  }, (err) => {
    console.log(err);
    loader.dismiss();
    this.presentToast(err);
  });
}*/

fileChange(event){
    if(event.target.files && event.target.files[0]){
      let reader = new FileReader();

      reader.onload = (event:any) => {
        this.img1 = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
      let fileList: FileList = event.target.files;  
      let file: File = fileList[0];
      console.log(file);
  }

presentToast(msg) {
  let toast = this.toastCtrl.create({
    message: msg,
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();
}

  deleteCarac(i){
  	this.currentCarac.splice(i, 1);
  }

  addCollection(){
    console.log('anthony', this.img1)
    console.log('groscaca', this.idImage)
  	if (this.nameCollec !== '' && this.descCollec !== '' && this.currentCarac.length !== 0){
  		this.changeInfos = this.httpClient.post('https://collectionback-bricebricebricemmi.c9users.io/new/collection/tok/' + this.token, 
        { 
          id: this.id, 
          title: this.nameCollec, 
          description: this.descCollec,
          image: this.idImage + '.jpg',
          carac: this.currentCarac,
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
  	} else {
  		console.log('ok')
  	}
  }

  retour() {
    this.navCtrl.pop();
  }
  
}
