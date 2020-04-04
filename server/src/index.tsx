import express from "express"
import { Request, Response } from 'express';
var app = express();

app.get('/a',function(req:Request,res:Response)
{
res.send('Hello World!');
});
var server=app.listen(4000,function() {});
