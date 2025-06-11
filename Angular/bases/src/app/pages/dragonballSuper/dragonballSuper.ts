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
  selector: 'app-dragonballSuper',
  imports:[
    //NgClass
  ],
  templateUrl: './dragonballSuper.html',
})

export class DragonballSuperComponent {

  name=signal('')
  power = signal(0);
  // ...existing code...er:120))
  characters = signal <Character[]>([
    {id:1, name:'Goku', power:100000},
    {id:2, name:'Gohan', power:900056},
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
