/*
 * @Author: ice 
 * @Date: 2018-09-29 19:24:42 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-29 19:38:47
 */
const GROUP_NAME = 'orders';

module.exports = [
    {
        method: 'POST',
        path:`/${GROUP_NAME}`,
        handler: async (request, reply) => {
            reply();
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '创建订单'
        }
    },
    {
        method: 'POST',
        path: `/${GROUP_NAME}/{orderId}/pay`,
        handler: async (request, reply) => {
          reply();
        },
        config: {
          tags: ['api', GROUP_NAME],
          description: '支付某条订单',
        }
      }
]