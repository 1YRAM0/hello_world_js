import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAddComponent {
name=signal("")
power=signal(0)

onNewCharacter = output<Character>();

addCharacter() {
if ( !this.name()|| !this.power() || this.power() <= 0){
      return;
    }
    const newCharacter:Character={
      id:Math.floor(Math.random()*1000),
      name:this.name(),
      power: this.power()
    };
//    this.characters.update(
//      (list)=>[...list,newCharacter])

      console.log({newCharacter})
      this.onNewCharacter.emit(newCharacter);
      this.resetFiles()
  }
  resetFiles (){
    this.name.set('');
    this.power.set(0);


}
}
