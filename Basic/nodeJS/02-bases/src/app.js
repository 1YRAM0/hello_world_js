
//const {emailtemplate} = require('./js-foundation/01-template.js');
//console.log(emailtemplate);
//require('./js-foundation/02-destructuring.js');

//const {getUserById} = require('./js-foundation/04-arrow.js');
/*const id = 2

getUserById(id, (error , user)=> {
    if (error) {throw Error(error);} 

    console.log({user});});
*/
//!refereincia a la carpeta plugins con factory
/*


const {buildmakePerson} = require('./js-foundation/05-factory.js');
const makeparson = buildmakePerson({
  getUUId,
  getAge,
});
const objetPerson = {name: 'Ariel', birthdate: '2000-09-10', job: 'jr-Developer'};
const person1 = makeparson(objetPerson);
console.log(person1);*/
const { getUUId, getAge ,httpC} = require('./plugins');

const { getPokemonbyId } = require('./js-foundation/06-promise.js');
const id = 4;
getPokemonbyId(id) 
    .then((pokemon) => console.log({pokemon}))
    //.catch((error) => console.error('Intentelo nuevamente'))
    .finally(() => console.log('finalizo la promesa'));


