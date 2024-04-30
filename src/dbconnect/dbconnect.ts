import mysql from 'mysql'
import { Request, Response } from 'express';
import pino from 'pino'

const logger = pino();
export default async function connect(query:string,req:Request, res:Response, CallBack):Promise<any>{
    //var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "dev",
  password: "123456",
  database: "employee"
});

    await con.connect(async function(err,result) {
    if (err){
        res.statusCode=500;
        res.send(err);
        logger.error(err,'error while connecting')
        CallBack(result);
    } 
    console.log("Connected!");
    //res.send(con);
      var sql = query;
      await con.query(sql, function (err, result) {
        if (err){
            res.statusCode=500;
            res.send(err);
            logger.error(err,'error while executing query')
            CallBack(result);
        }else{
            res.statusCode=200;
            res.send(result);
            console.log("DB success");
            CallBack(result);
        } 
      });
    });
}