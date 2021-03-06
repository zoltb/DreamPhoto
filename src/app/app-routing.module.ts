import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AboutComponent} from './about/about.component';
import {GalleryIngatlanokComponent} from './gallery-page/gallery-ingatlanok/gallery-ingatlanok.component';
import {GalleryPageComponent} from './gallery-page/gallery-page.component';
import {ContactComponent} from './contact/contact.component';
import {EgyebKepekComponent} from './gallery-page/gallery-egyeb/egyeb-kepek/egyeb-kepek.component';
import {CegesKepekComponent} from './gallery-page/gallery-ceges/ceges-kepek/ceges-kepek.component';
import {GalleryCegesComponent} from './gallery-page/gallery-ceges/gallery-ceges.component';
import {GalleryEgyebComponent} from './gallery-page/gallery-egyeb/gallery-egyeb.component';

const routes: Routes = [

  {
    path: '',
    component: MainPageComponent

  },

  {
    path: 'kapcsolat',
    component: ContactComponent

  },
  {
    path: 'bemutatkozas',
    component: AboutComponent

  },

  // {
  //   path: 'kepek',
  //   component: GalleryPageComponent
  // },
{
    path: 'ingatlankepek',
    component: GalleryIngatlanokComponent
  // {
  //   path: 'kepek/ingatlanok',
  //   component: GalleryIngatlanokComponent

  // },
  // {
  //   path: 'kepek/ceges',
  //   component: GalleryCegesComponent

  // },
  // {
  //   path: 'kepek/egyeb',
  //   component: GalleryEgyebComponent

  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
