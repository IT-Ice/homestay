/*
 * @Author: ice 
 * @Date: 2018-09-29 16:01:40 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 16:29:30
 */
const { jwtHeaderDefine } = require('../utils/router-helper');

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: (request, reply) => {
            console.log(request.auth.credentials);
            
            reply('hapi');
        },
        config: {
            tags: ['api', 'tests'],
            description: '测试接口',
            validate: {
                ...jwtHeaderDefine, // 增加需要 jwt auth 认证的接口 header 校验
            }
        }
    }
]

