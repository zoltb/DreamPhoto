import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AboutComponent} from './about/about.component';
import {GalleryIngatlanokComponent} from './gallery-page/gallery-ingatlanok/gallery-ingatlanok.component';
import {GalleryPageComponent} from './gallery-page/gallery-page.component';
import {ContactComponent} from './contact/contact.component';
import {EgyebKepekComponent} from './gallery-page/gallery-egyeb/egyeb-kepek/egyeb-kepek.component';
import {CegesKepekComponent} from './gallery-page/gallery-ceges/ceges-kepek/ceges-kepek.component';

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

  {
    path: 'kepek',
    component: GalleryPageComponent
  },

  {
    path: 'kepek/ingatlanok',
    component: GalleryIngatlanokComponent

  },
  {
    path: 'kepek/ceges',
    component: CegesKepekComponent

  },
  {
    path: 'kepek/egyeb',
    component: EgyebKepekComponent

  },

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
