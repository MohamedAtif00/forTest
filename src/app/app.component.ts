import { Component, OnInit } from '@angular/core';
declare var AOS : any


interface hero
{
  name:string,
  power:number,
  image:string | null
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'test';

  selectedFile:File | null = null;
  convertedImage:string | null = null;
  selectedHero:hero|null = null;
  
  name!:string;
  power!:string;
  image!:string|null;

  hero:hero[] = []


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
    this.hero.push({name:this.name,power:Number.parseInt(this.power),image:this.convertedImage})
    console.log(this.image);
    
    
  }

  Update()
  {
    if(this.selectedHero)
    {
      let index =  this.hero.findIndex(x =>x.name == this.selectedHero?.name)
      if(index >=0)
      {
        this.hero[index].name = this.name;
        this.hero[index].power = Number.parseInt(this.power);
        this.image === ''? null:this.hero[index].image = this.convertedImage;
      }

    }
  }

  Delete()
  {
    if(this.selectedHero)
    {
      let index =  this.hero.findIndex(x =>x.name == this.selectedHero?.name)
      if(index >=0)
      {
        this.hero.splice(index,1)
      }

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

    console.log(this.selectedHero);
    
  }



  
}
