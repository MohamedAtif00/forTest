import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroService } from './Hero.Service';
import { hero } from './hero.model';
declare var AOS : any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  selectedFile:File | null = null;
  convertedImage:string | null = null;
  selectedHero:hero|null = null;
  
  name!:string;
  power!:string;
  image!:string|null;

  constructor(public heroServ: HeroService) {}


  ngOnInit(): void {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 200,
      delay: 100,
    });
  }


  create()
  {
    this.heroServ.CreateHero({ name: this.name, power:Number.parseInt(this.power), image: this.convertedImage })
  }

  Update()
  {
    if (this.selectedHero)
        this.heroServ.UpdateHero({id:this.selectedHero.id,name:this.name,power:Number.parseInt(this.power),image:this.convertedImage});    
  }


  Delete()
  {
    if(this.selectedHero)
    {
      this.heroServ.DeleteHero(this.selectedHero.id)
    }
  }






  convertImage(event:any)
  {
    this.selectedFile  = event.target.files[0] as File
    this.convertedImage = URL.createObjectURL(this.selectedFile)
    
  }

  selectItem(hero:hero)
  {
    this.selectedHero = hero;
    this.name = hero.name
    this.power = hero.power.toString()
    this.image = hero.image

    //console.log(this.selectedHero);
    
  }



  
}
