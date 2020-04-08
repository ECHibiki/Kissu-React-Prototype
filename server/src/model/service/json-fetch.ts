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

      this.attemptFetchPageJSONInfo(send_request, template_fn, route, board, req, res, {});

  }

  attemptFetchPageJSONInfo(
    send_request:(properties:any,
      template_fn:(...args:string[])=>string,
      route:string, board:string,
      req:Request, res:Response) => void,
    template_fn:(...args:string[])=>string | any,
    route:string,
    board:string,
    req:Request,
    res:Response,
    react_json:any){
//process.env.JSON_ROUTE
    if(route == "page"){
      if(react_json.hasOwnProperty("react_contents")){
        fs.readFile(process.env.JSON_ROUTE + `/${board}/properties.json`, (err:any, data:any) =>{
          try{
            react_json['properties'] = JSON.parse(data);
            send_request(react_json, template_fn, route, board, req, res);
          }
          catch(error){
            console.log("FS Err");
            console.log(error);
            send_request({properties:{title:"Properties-Error"}}, template_fn, route, board, req, res);
          }
        });
      }
      else{
        let page:number = req.params["page"] == 'index' ? 0 : parseInt(req.params["page"]) - 1;
        fs.readFile(process.env.JSON_ROUTE + `/${board}/${page}.json`, (err:any, data:any) =>{
          try{
            react_json['react_contents'] = JSON.parse(data);
            this.attemptFetchPageJSONInfo(send_request, template_fn, route, board, req, res, react_json);
          }
          catch(error){
            console.log("FS Err");
            console.log(error);
            send_request({properties:{title:"PageJSON-Error"}}, template_fn, route, board, req, res);
          }
        });
      }
    }
  }

}
