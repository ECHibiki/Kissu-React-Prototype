import {Model} from "../../../model/model"
import { Request, Response } from "express";

export class JSONBridge{
  model:Model
  constructor(model:Model){
      this.model = model;
  }

// send_request simplified
  getJSONProperties(
    send_request:(properties:any,
      template_fn:(...args:string[])=>string,
        route:string, board:string,req:Request, res:Response) => void,
    template_fn:(...args:string[])=>string,
    route:string,
    board:string,
    req:Request,
    res:Response){
      this.model.getJSONProperties(send_request, template_fn, route, board, req, res);
  }
}
