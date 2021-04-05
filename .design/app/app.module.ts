import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryIngatlanokComponent } from './gallery-page/gallery-ingatlanok/gallery-ingatlanok.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { MainComponent } from './main-page/main/main.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {LeirasComponent} from './about/leiras/leiras.component';
import {IngatlanKepekComponent} from './gallery-page/gallery-ingatlanok/ingatlan-kepek/ingatlan-kepek.component';
import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { CegesKepekComponent } from './gallery-page/gallery-ceges/ceges-kepek/ceges-kepek.component';
import { EgyebKepekComponent } from './gallery-page/gallery-egyeb/egyeb-kepek/egyeb-kepek.component';
import { GalleryCegesComponent } from './gallery-page/gallery-ceges/gallery-ceges.component';
import { GalleryEgyebComponent } from './gallery-page/gallery-egyeb/gallery-egyeb.component';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
