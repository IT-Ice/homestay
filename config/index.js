/*
 * @Author: ice 
 * @Date: 2018-09-29 16:01:34 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-29 16:19:16
 */
const { env } = process;
module.exports = {
    host: env.HOST,
    port: env.PORT,
}