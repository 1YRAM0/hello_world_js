const { getUUId } = require('../plugins/get-id-plugin.js');
const {getAge} = require('../plugins/get-age-plugin.js');
const buildLogger = require('../plugins/logger.plugin.js');
const {httpC} = require('../plugins/http-client.js');
module.exports = { 
    getAge,
    getUUId,
    httpC,
    buildLogger,
 };