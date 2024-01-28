import { Injectable, OnInit } from "@angular/core";
import { hero } from "../Model/hero.model";

@Injectable(
  {
    providedIn: 'root'
  })
export class HeroService implements OnInit{

  hero: hero[] = []


  constructor(){
    this.getDataFromLocalStorage(); 
  }

  ngOnInit(): void {
    this.getDataFromLocalStorage(); 
  }

  CreateHero(hero:{name:string,power:number,image:string|null}) {
    let index = this.hero.length
    this.hero.push({id:index,name:hero.name,power:hero.power,image:hero.image});
    this.deleteDataFromLocalStorage()
    this.saveDataToLocalStorage()
  }


  UpdateHero(hero:hero)
  {
    if (hero.id >= 0) {
      this.hero[hero.id].name = hero.name;
      this.hero[hero.id].power = hero.power;
      this.hero[hero.id].image = hero.image;
      console.log(this.hero);
      this.deleteDataFromLocalStorage()
      this.saveDataToLocalStorage()
    }
  }


  DeleteHero(index:number)
  {
    if(index >=0)
    {
      this.hero.splice(index,1)
      this.deleteDataFromLocalStorage()
      this.saveDataToLocalStorage()
    }
    
  }


  saveDataToLocalStorage() {
    const dataToSave = this.hero;
    localStorage.setItem('hero', JSON.stringify(dataToSave));
  }

  getDataFromLocalStorage() {
    const savedData = localStorage.getItem('hero');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      this.hero = parsedData
      console.log(parsedData);
    }
  }

  deleteDataFromLocalStorage() {
    localStorage.removeItem('hero');
  }
}
