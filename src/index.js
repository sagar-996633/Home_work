const express = require('express');
const http = require('http');
const { connectDB } = require('./db/dbConnection');
const routes = require('./routes/v1');
const config = require('./config/config');

const app = express()


app.use("/v1", routes);

connectDB()

const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("server listning port number 8080!");
});