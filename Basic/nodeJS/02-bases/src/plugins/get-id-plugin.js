const { v4: uuidv4 } = require('uuid');
const getUUId = (id) => {
    return uuidv4();
}
module.exports = { 
    getUUId,
 };