/*
 * @Author: ice 
 * @Date: 2018-09-30 11:47:35 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 16:26:07
 */
const Joi = require('joi');

const paginationDefine = {
  limit: Joi.number().integer().min(1).default(10)
    .description('每页的条目数'),
  page: Joi.number().integer().min(1).default(1)
    .description('页码数'),
  pagination: Joi.boolean().description('是否开启分页，默认为true'),
}

const jwtHeaderDefine = {
  headers: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}

module.exports = { paginationDefine, jwtHeaderDefine }