import { Component } from '@angular/core';
import { HeroService } from '../Service/Hero.Service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {


  constructor(public heroServ: HeroService) {}

  
}
