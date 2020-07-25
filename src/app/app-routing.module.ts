import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AboutComponent} from './about/about.component';
import {GalleryIngatlanokComponent} from './gallery-page/gallery-ingatlanok/gallery-ingatlanok.component';
import {GalleryPageComponent} from './gallery-page/gallery-page.component';

const routes: Routes = [
  {
    path: 'elerhetosegeim',
    component: AboutComponent

  },
  {
    path: 'bemutatkozas',
    component: AboutComponent

  },

  {
    path: 'kepek',
    component: GalleryPageComponent
  },

  {
    path: 'kepek/ingatlanok',
    component: GalleryIngatlanokComponent

  },

  {
    path: '',
    component: MainPageComponent

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
