import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AdidasComponent } from './components/adidas/adidas.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ContactComponent } from './components/contact/contact.component';
import { MensComponent } from './components/mens/mens.component';
import { NikeComponent } from './components/nike/nike.component';
import { PumaComponent } from './components/puma/puma.component';
import { WomensComponent } from './components/womens/womens.component';

const routes: Routes = [
  {
    path: 'collections',
    component: CollectionsComponent,
  },
  {
    path: 'collections/adidas',
    component: AdidasComponent,
  },
  {
    path: 'collections/nike',
    component: NikeComponent,
  },
  {
    path: 'collections/puma',
    component: PumaComponent,
  },
  {
    path: 'men',
    component: MensComponent
  },
  {
    path: 'women',
    component: WomensComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },  
  {
    path: '**',
    redirectTo: 'collections',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
