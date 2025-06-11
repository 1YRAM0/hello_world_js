import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
//import { RouterLink, RouterLinkActive } from '@angular/router';
 interface Character {
  id :number ,
  name:string,
  power:number
 }
@Component
({
  selector: 'app-dragonball',
  imports:[
    //NgClass
  ],
  templateUrl: './dragonball.html',
})

export class DragonballComponent {

  name=signal('Tenchinjan')
  power = signal(2001);
  // ...existing code...er:120))
  characters = signal <Character[]>([
    {id:1, name:'Goku', power:9001},
    {id:2, name:'Gohan', power:9101},
    {id:3, name:'Vegeta', power:8099},
    {id:4, name:'Picolo', power:6000},
    {id:5, name:'Jamcha', power:250},

  ]);
  addCharacter() {
    if ( !this.name()|| !this.power() || this.power() <= 0){
      return;
    }
    const newCharacter:Character={
      id:this.characters().length+1,
      name:this.name(),
      power: this.power()
    };
    this.characters.update(
      (list)=>[...list,newCharacter])
    this.resetFiles()
  }
  resetFiles (){
    this.name.set('');
    this.power.set(0);

  }

  /*
  powerClass =computed(()=>{
    return{
      'text-danger':true,
    }
  })*/

}
