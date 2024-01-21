import { Injectable } from "@angular/core";
import { hero } from "./hero.model";

@Injectable(
  {
    providedIn: 'root'
  })
export class HeroService {

  hero: hero[] = []



  CreateHero(hero:{name:string,power:number,image:string|null}) {
    let index = this.hero.length
    this.hero.push({id:index,name:hero.name,power:hero.power,image:hero.image});
  }


  UpdateHero(hero:hero)
  {
    if (hero.id >= 0) {
      this.hero[hero.id].name = hero.name;
      this.hero[hero.id].power = hero.power;
      this.hero[hero.id].image = hero.image;
      console.log(this.hero);
      
    }
  }


  DeleteHero(index:number)
  {
    if(index >=0)
    {
      this.hero.splice(index,1)
    }
  
  }

}
