import { Component, signal } from '@angular/core';
@Component({
  templateUrl:'./counter.component.html' ,
  styles: `
  button {
    margin: 5 15px;
    padding: 5px;
    font-size: 16px;
    width:75px;
    height: 30px;
    border-radius: 10px;
    cursor: pointer;
    color: white;
    background-color:rgb(100, 95, 205);
  }

  `,

})

export class  CounterComponent {
  counter = 100;
  counterSignal= signal(100);
  constructor() {
    /*
    setInterval(() => {
      this.increaseByOne(1);
      console.log('0tick');
    },2000)
    */
  }

  increaseByOne(value: number) {
    this.counter += value;
    this.counterSignal.update((current) => current + value);
  }
  decreaseByOne(value: number) {
    this.counter -= value;
    this.counterSignal.update((current) => current - value);
  }
  resetCounter = () => {
    this.counter = 100;}
};
