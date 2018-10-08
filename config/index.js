/*
 * @Author: ice 
 * @Date: 2018-09-29 16:01:34 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 16:20:31
 */
require('env2')('./.env');
const { env } = process;
module.exports = {
    host: env.HOST,
    port: env.PORT,
    jwtSecret: env.JWT_SECRET
}