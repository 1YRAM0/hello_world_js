const getAgeplug = require('get-age');

const getAge = (birthdate) => {
    if (!birthdate) {
        throw new Error('Birthdate is required');
        }
    return getAgeplug(birthdate);
}
module.exports ={ getAge,};