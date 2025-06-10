import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { Component, signal, computed } from "@angular/core";

@Component({
  templateUrl: './hero.component.html',
  imports: [UpperCasePipe , LowerCasePipe],
})

export class HeroComponent{
  nameSignal = signal('Ariel Yepez');
  ageSignal = signal(24);
  heroDescriptionSignal = computed(() => {
    return `Hero data: ${this.nameSignal()} -  ${this.ageSignal()}`;
  });
  UpperCasenameSignal = computed(() => {
    return this.nameSignal().toUpperCase();
  });
  changeHero = () => {
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(25);
  };
   resetHero = () => {
    this.nameSignal.set('Ariel Yepez');
    this.ageSignal.set(24);
  };
  changeAge = () => {
    this.ageSignal.set(60);}

}

  /*getHerodescription = () => {
    return `Hero data: ${this.nameSignal()} -  ${this.ageSignal()}`;
  };
  changeHero = () => {
    this.nameSignal.set('Spiderman');
    this.ageSignal.set(25);
  };
  resetHero = () => {
    this.nameSignal.set('Ariel Yepez');
    this.ageSignal.set(24);
  };
  changeAge = () => {
    this.ageSignal.set(60);}


};*/
