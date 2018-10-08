/*
 * @Author: ice 
 * @Date: 2018-09-30 16:11:48 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 16:19:58
 */
const config = require('../config');

const validate = (decoded, request, callback) => {
    let error;
    const { userId } = decoded;

    if (!userId) {
        return callback(error, false, userId);
    }
    const credentials = {
        userId
    }

    return callback(error, true, credentials);
} 

module.exports = server => {
    server.auth.strategy('jwt', 'jwt', {
        key: config.jwtSecret,
        validateFunc: validate
    });
    server.auth.default('jwt');
}