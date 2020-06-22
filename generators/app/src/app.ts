import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

import dotenv from 'dotenv'
if (process.env.NODE_ENV !== "production"){
  dotenv.config()
}
import Logger, { LOGGING_LEVEL } from './logger'

const logger = Logger.getConsoleLogger("app", LOGGING_LEVEL.SILLY)

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(function(req, res, next){
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
 res.setHeader("Access-Control-Allow-Headers", "content-type");
 res.setHeader("Content-Type", "application/json");
 res.setHeader("Access-Control-Allow-Credentials", 'true');
 next();
});

app.use(routes);

app.listen("9090");