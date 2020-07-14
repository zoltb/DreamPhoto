import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {AboutComponent} from './about/about.component';
import {GalleryComponent} from './gallery/gallery.component';

const routes: Routes = [
  {
    path: 'rolam',
    component: AboutComponent

  },
  {
    path: 'kepek',
    component: GalleryComponent

  },
  {
    path: '',
    component: MainPageComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
