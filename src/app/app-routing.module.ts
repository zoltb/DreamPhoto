import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AboutComponent} from './about/about.component';
import {GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [
  {
    path: 'elerhetosegeim',
    component: GalleryComponent

  },
  {
    path: 'bemutatkozas',
    component: AboutComponent

  },
  {
    path: 'kepek/ingatlanok',
    component: GalleryComponent

  },
  {
    path: 'kepek/ingatlanok',
    component: GalleryComponent

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
