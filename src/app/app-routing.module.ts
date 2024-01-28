import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateHeroComponent } from './create-hero/create-hero.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

const routes: Routes = [
  {path:'CreateHero',component:CreateHeroComponent},
  {path:'Catalogue',component:CatalogueComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
