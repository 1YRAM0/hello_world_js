import { getUUId } from '../plugins/get-id-plugin';
import { getAge } from '../plugins/get-age-plugin';
import { name } from '../app';
interface BuilMakePersonOptions{
    getUUId:()=>String,
    getAge:(birthdate:string)=>number,
    
    
}
interface personOptions{
    name:string,
    birthdate:string,
    job: string,

}
const objetPerson = {
  name: 'Ariel', birthdate: '2000-09-10', job: 'jr-Developer'};

/*const { getUUId } = require('../plugins/get-id-plugin.js');
const {getAge} = require('../plugins/get-age-plugin.js');*/
//const { getUUId, getAge } = require('../plugins');

export const buildmakePerson=({ getUUId, getAge }:BuilMakePersonOptions) => {
    return ({ name, birthdate, job }:personOptions) => {
        return {
            id: getUUId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
            job: job,
        };
    };
}

/*const person1  = buildPerson(objetPerson);
console.log(person1);*/

