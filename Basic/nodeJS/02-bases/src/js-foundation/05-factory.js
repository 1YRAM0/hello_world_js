const objetPerson = {
  name: 'John', birthdate: '2000-09-10', job: 'Developer'};

const buildPerson =({name ,birthdate,job })=> {
    return{
        name: name,
        birthdate: birthdate,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
        job: job,
    }

};
const person ={name: 'John', birthdate: '2000-09-10', job: 'Developer'};
const jon  = buildPerson(person);
console.log(jon);
