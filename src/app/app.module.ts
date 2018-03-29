import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CollectionsPage } from '../pages/collections/collections';
import { CollectionSinglePage } from '../pages/collectionSingle/collectionSingle';
import { SearchPage } from '../pages/search/search';
import { DiscoverPage } from '../pages/discover/discover';
import { ProfilePage } from '../pages/profile/profile';
import { ProfileEditPage } from '../pages/profileEdit/profileEdit';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemPage } from '../pages/item/item';
import { MoreSinglePage } from '../pages/moreSingle/moreSingle';
import { MoreSingleMSPage } from '../pages/moreSingleMS/moreSingleMS';
import { AjouterPage } from '../pages/ajouter/ajouter';
import { AjouterItemPage } from '../pages/ajouterItem/ajouterItem';
import { ModifierItemPage } from '../pages/modifierItem/modifierItem';
import { ModifierCollectionPage } from '../pages/modifierCollection/modifierCollection';
import { MoreProfilPage } from '../pages/moreProfil/moreProfil';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    CollectionsPage,
    CollectionSinglePage,
    SearchPage,
    DiscoverPage,
    ProfilePage,
    ProfileEditPage,
    TabsPage,
    ItemPage,
    MoreSinglePage,
    MoreSingleMSPage,
    AjouterPage,
    AjouterItemPage,
    ModifierItemPage,
    MoreProfilPage,
    ModifierCollectionPage
  ],
  imports: [
    BrowserModule,
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
    MyApp,
    CollectionsPage,
    CollectionSinglePage,
    SearchPage,
    DiscoverPage,
    ProfilePage,
    ProfileEditPage,
    TabsPage,
    ItemPage,
    MoreSinglePage,
    MoreSingleMSPage,
    AjouterPage,
    AjouterItemPage,
    ModifierItemPage,
    MoreProfilPage,
    ModifierCollectionPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
