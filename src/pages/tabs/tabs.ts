import { Component } from '@angular/core';

import { CollectionsPage } from '../collections/collections';
import { SearchPage } from '../search/search';
import { DiscoverPage } from '../discover/discover';
import { ProfilePage } from '../profile/profile';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CollectionsPage;
  tab2Root = SearchPage;
  tab3Root = DiscoverPage;
  tab4Root = ProfilePage;

  constructor() {

  }
}
