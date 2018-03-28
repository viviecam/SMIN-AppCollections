import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CollectionsPage } from '../pages/collections/collections';
import { CollectionSinglePage } from '../pages/collectionSingle/collectionSingle';
import { SearchPage } from '../pages/search/search';
import { DiscoverPage } from '../pages/discover/discover';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';
import { ItemPage } from '../pages/item/item';
import { MoreSinglePage } from '../pages/moreSingle/moreSingle';
import { MoreSingleMSPage } from '../pages/moreSingleMS/moreSingleMS';

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
    TabsPage,
    ItemPage,
    MoreSinglePage,
    MoreSingleMSPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CollectionsPage,
    CollectionSinglePage,
    SearchPage,
    DiscoverPage,
    ProfilePage,
    TabsPage,
    ItemPage,
    MoreSinglePage,
    MoreSingleMSPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
