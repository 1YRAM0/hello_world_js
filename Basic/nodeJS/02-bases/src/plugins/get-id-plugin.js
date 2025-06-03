const { v4: uuidv4 } = require('uuid');
//const { v4: uuidv4 } = getidPlugin;
const getUUId = (id) => {
    return uuidv4();
}
module.exports = { 
    getUUId,
 };