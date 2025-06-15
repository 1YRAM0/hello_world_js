import { NgClass } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { DragonballServices } from '../../services/dragonball.services.ts.service';

@Component
({
  selector: 'app-dragonballSuper',
  imports: [
    CharacterListComponent,
    CharacterAddComponent
],
  templateUrl: './dragonballSuper.html',
})

export class DragonballSuperComponent {

  public DragonballServices=inject(DragonballServices);


}
