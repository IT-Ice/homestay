/*
 * @Author: ice 
 * @Date: 2018-09-29 16:01:40 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-29 16:07:38
 */

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('hapi');
        }
    }
]

