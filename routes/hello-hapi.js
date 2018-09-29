/*
 * @Author: ice 
 * @Date: 2018-09-29 16:01:40 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-29 19:39:21
 */

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            reply('hapi');
        },
        config: {
            tags: ['api', 'tests'],
            description: '测试接口'
        }
    }
]

