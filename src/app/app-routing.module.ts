import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  {
    path: 'collections',
    component: CollectionsComponent,
  },
  {
    path: 'collections/:collection',
    component: CatalogueComponent,
  },
  {
    path: 'men',
    component: CatalogueComponent
  },
  {
    path: 'women',
    component: CatalogueComponent
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
    path: 'details',
    component: DetailsComponent
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
