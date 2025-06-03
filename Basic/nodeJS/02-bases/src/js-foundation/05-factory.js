const objetPerson = {
  name: 'Ariel', birthdate: '2000-09-10', job: 'jr-Developer'};

/*const { getUUId } = require('../plugins/get-id-plugin.js');
const {getAge} = require('../plugins/get-age-plugin.js');*/
//const { getUUId, getAge } = require('../plugins');

const buildmakePerson=({ getUUId, getAge }) => {
    return ({ name, birthdate, job }) => {
        return {
            id: getUUId(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate),
            job: job,
        };
    };
}
module.exports = {buildmakePerson};

/*const person1  = buildPerson(objetPerson);
console.log(person1);*/

