import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AjouterPage } from '../pages/ajouter/ajouter';
import { AjouterItemPage } from '../pages/ajouterItem/ajouterItem';
import { CollectionsPage } from '../pages/collections/collections';
import { CollectionSinglePage } from '../pages/collectionSingle/collectionSingle';
import { DiscoverPage } from '../pages/discover/discover';
import { ItemPage } from '../pages/item/item';
import { LoginPage } from '../pages/login/login';
import { ModifierCollectionPage } from '../pages/modifierCollection/modifierCollection';
import { ModifierItemPage } from '../pages/modifierItem/modifierItem';
import { MoreProfilPage } from '../pages/moreProfil/moreProfil';
import { MoreSinglePage } from '../pages/moreSingle/moreSingle';
import { MoreSingleMSPage } from '../pages/moreSingleMS/moreSingleMS';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileEditPage } from '../pages/profileEdit/profileEdit';
import { SearchPage } from '../pages/search/search';
import { SignUpPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';


@NgModule({
  declarations: [
    LoginPage,
    MyApp,
    AjouterPage,
    AjouterItemPage,
    CollectionsPage,
    CollectionSinglePage,
    DiscoverPage,
    ItemPage,
    ModifierCollectionPage,
    ModifierItemPage,
    MoreProfilPage,
    MoreSinglePage,
    MoreSingleMSPage,
    ProfilePage,
    ProfileEditPage,
    SearchPage,
    SignUpPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          backButtonText: 'Retour'
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    MyApp,
    AjouterPage,
    AjouterItemPage,
    CollectionsPage,
    CollectionSinglePage,
    DiscoverPage,
    ItemPage,
    ModifierCollectionPage,
    ModifierItemPage,
    MoreProfilPage,
    MoreSinglePage,
    MoreSingleMSPage,
    ProfilePage,
    ProfileEditPage,
    SearchPage,
    SignUpPage,
    TabsPage    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FileTransfer,
    File,
    Camera
  ]
})
export class AppModule {}
