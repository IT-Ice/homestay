/*
 * @Author: ice 
 * @Date: 2018-09-29 15:37:36 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-30 16:22:13
 */
const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routesOrders = require('./routes/orders');
const routesUsers = require('./routes/user');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
const pluginHapiPagination = require('./plugins/hapi-pagination'); 
const hapiAuthJWT2 = require('hapi-auth-jwt2');
const pluginHapiAuthJWT2 = require('./plugins/hapi-auth-jwt2');
const server = new Hapi.Server();
//配置服务器启动 host 与 port
server.connection({
    port: config.port,
    host: config.host
});

const init = async () => {
    await server.register([
        ...pluginHapiSwagger,
        pluginHapiPagination,
        hapiAuthJWT2
    ]);
    pluginHapiAuthJWT2(server);
    server.route([
        ...routesHelloHapi,
        ...routesShops,
        ...routesOrders,
        ...routesUsers
    ]);
    //启动服务
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

init();