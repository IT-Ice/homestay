/*
 * @Author: ice 
 * @Date: 2018-09-29 15:37:36 
 * @Last Modified by: ice
 * @Last Modified time: 2018-09-29 16:18:26
 */
const Hapi = require('hapi');
const config = require('./config');
const routesHelloHapi = require('./routes/hello-hapi');
require('env2')('./.env')
const server = new Hapi.Server();
//配置服务器启动 host 与 port
server.connection({
    port: config.port,
    host: config.host
});

const init = async () => {
    server.route([
        ...routesHelloHapi
    ]);
    //启动服务
    await server.start();
    console.log(`Server running at: ${server.info.uri}`);
}

init();