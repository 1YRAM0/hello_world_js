import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../components/interfaces/character.interface';
import { count } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DragonballServices{

  characters = signal <Character[]>([
    {id:1, name:'Goku', power:100000},
    {id:2, name:'Gohan', power:900056},
  ]);
  saveToLocalstorage=effect(()=>{
    localStorage.setItem('characters',JSON.stringify(this.characters))
    console.log(`Character count ${this.characters().length}`)
  });

  addCharacter(newCharacter:Character) {
    this.characters.update(
      list=>[...list,newCharacter]
    )
  }
}
