const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(middlewares);
server.use(router);
server.use(cors());

server.listen(8080, () => {
  console.log("JSON Server is running");
});

module.exports = server;
