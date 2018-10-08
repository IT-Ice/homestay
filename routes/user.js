/*
 * @Author: ice 
 * @Date: 2018-09-30 15:55:37 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 16:09:46
 */
const JWT = require('jsonwebtoken');
const GROUP_NAME = 'users';

module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}/createJWT`,
        handler: async (request, reply) => {
            const generateJWT = jwtInfo => {
                const payload = {
                    userId: jwtInfo.userId,
                    exp: Math.floor(new Date().getTime() / 1000) + 7 * 24 * 60 * 60
                }
                return JWT.sign(payload, process.env.JWT_SECRET);
            }
            reply(generateJWT({
                userId: 1
            }));
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '用于测试的用户 JWT 签发',
            auth: false
        }
    }
]