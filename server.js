const cors = require("cors");
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

global.__basedir = __dirname;

require('dotenv').config();
const server = process.env.server;
const portname = process.env.port;


const initRoutes = require("./src/routes");

app.use(express.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use((error, req, res, next) => {
    console.log('This is the rejected field ->', error.field);
  });

initRoutes(app);

app.listen(portname, server, () => {
  console.log("Server is listening on port " + portname);
});
