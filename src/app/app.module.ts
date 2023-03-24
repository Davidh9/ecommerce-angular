import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { CollectionsComponent } from './components/collections/collections.component';
import { MensComponent } from './components/mens/mens.component';
import { WomensComponent } from './components/womens/womens.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdidasComponent } from './components/adidas/adidas.component';
import { NikeComponent } from './components/nike/nike.component';
import { PumaComponent } from './components/puma/puma.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CollectionsComponent,
    MensComponent,
    WomensComponent,
    AboutComponent,
    ContactComponent,
    AdidasComponent,
    NikeComponent,
    PumaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
