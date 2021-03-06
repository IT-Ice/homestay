/*
 * @Author: ice 
 * @Date: 2018-09-29 17:10:54 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 16:23:13
 */
const models = require('../models');
const { paginationDefine } = require('../utils/router-helper');
const GROUP_NAME = 'shops';


module.exports = [
    {
        method: 'GET',
        path: `/${GROUP_NAME}`,
        handler: async (request, reply) => {
           const {rows: results, count: totalCount} = await models.shops.findAndCountAll({
               attributes: ['id', 'name'],
               limit: request.query.limit,
               offset: (request.query.page - 1) * request.query.limit
           });
           reply({results, totalCount});
        },
        config: {
            tags: ['api', GROUP_NAME],
            auth: false,
            description: '获取店铺列表',
            validate: {
                query: {
                    ...paginationDefine
                }
            }
        }
    },
    {
        method: 'GET',
        path: `/${GROUP_NAME}/{shopId}/goods`,
        handler: async (request, reply) => {
            const { rows: results, count: totalCount } = await models.shops.findAndCountAll({
                where: {
                    shop_id: request.params.shopId
                },
                attributes: ['id', 'name'],
                limit: request.query.limit,
                offset: (request.query.page - 1) * request.query.limit
            });
            reply({results, totalCount});
        },
        config: {
            tags: ['api', GROUP_NAME],
            description: '获取店铺的商品列表'
        }
    } 
]