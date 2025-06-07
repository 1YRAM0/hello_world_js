export class Person {
    
    constructor( 
    public name: string,
    private address: string= 'No address',     
    ){} 
    };
/*export class hero extends Person {



    constructor(
        public alterego: string,
        public age: number,
        public realName : string
    ){
        super(realName, 'New York');
    }
}*/
export class hero {
    //public person:Person;
    constructor(
        public alterego: string,
        public age: number,
        public realName : string,
        public person:Person,
    ){
        
    }
}

const tony = new Person('Tony', 'New York');
const ironMan = new hero('Iron man ',45, 'Tony ',tony);
console.log(ironMan);
