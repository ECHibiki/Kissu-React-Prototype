import express from "express"
import { Request, Response } from 'express';
var app = express();

app.get('/*',function(req:Request,res:Response)
{
    res.send('Hello World!\n' + req.url);
});
var server=app.listen(4000,function() {});
