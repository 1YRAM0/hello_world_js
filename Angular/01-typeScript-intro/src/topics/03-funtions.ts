function addNumbers(a: number, b: number) {
    return a + b;
}
const addNumbersArrow = (a: number, b: number) => {
    return a + b;
}
const multyplyNumbers = (firtsnumber: number, secondnumber?: number ,base:number =2 ) => {
    return firtsnumber* base;
}
/*
const result: number= addNumbers(5, 10);
const result2 :number = addNumbersArrow(12, 10);
const result3: number = multyplyNumbers(5 );
console.log(`The result of the addition is: ${result}`);
console.log(`The result of the addition with arrow function is: ${result2}`);
console.log(`The result of the multiplication is: ${result3}`);
*/

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = (caracter:Character , amount: number = 100) => {
    const dif:number = 100 - (caracter.hp + amount);
    if (caracter.hp + amount < 100) {
        console.log(`a tu personaje  ${caracter.name} aun le falta   ${dif} HP`);
    }
    caracter.hp += amount;
    if (caracter.hp >= 100) {
        caracter.hp = 100;
        console.log(`el personaje ${caracter.name} has been healed to maximum HP`);
    }
    

}
 const Ronwisli: Character = {
    name: 'Ronwisli',    
    hp: 36,
    showHp() {
        console.log(`HP: ${this.hp} of ${this.name}`);
    }
}
//healCharacter(Ronwisli, 10);
healCharacter(Ronwisli, 32);
Ronwisli.showHp();
export{};
