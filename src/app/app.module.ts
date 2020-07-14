import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import { MainComponent } from './main-page/main/main.component';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {LeirasComponent} from './about/leiras/leiras.component';
import {KepekComponent} from './gallery/kepek/kepek.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    MainPageComponent,
    ContactComponent,
    GalleryComponent,
    MainComponent,
    LeirasComponent,
    KepekComponent
  ],
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
