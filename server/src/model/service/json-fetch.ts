import * as fs from 'fs';
import {board_properties} from "./datastore/board-properties";
import { Request, Response } from "express";
export class JSONFetcher{
  constructor(){}

  fetchAndParseProperties(
    send_request:(properties:any,
      template_fn:(...args:string[])=>string,
      route:string, board:string,
      req:Request, res:Response) => void,
    template_fn:(...args:string[])=>string,
    route:string,
    board:string, req:Request, res:Response){

      this.attemptFetchJSONFile(send_request, template_fn, route, board, req, res);

  }

  attemptFetchJSONFile(
    send_request:(properties:any,
      template_fn:(...args:string[])=>string,
      route:string, board:string,
      req:Request, res:Response) => void,
    template_fn:(...args:string[])=>string,
    route:string,
    board:string, req:Request, res:Response){
//process.env.JSON_ROUTE
    fs.readFile(process.env.JSON_ROUTE + "/" + board + "/properties.json", (err:any, data:any) =>{
      send_request(JSON.parse(data), template_fn, route, board, req, res);
    });

  }

}
