import { Templater } from './service/templater';
import {Model} from "../model/model";
import { Request, Response } from "express";

export class View{
  model_reference:Model;
  templater:Templater;
  constructor(model:Model){
    this.model_reference = model;
    this.templater = new Templater(model);
  }

  getStartupMessage(port:number):string{
    return this.templater.getStartUpText(port);
  }

  getRouteRendered(template_fn:(...args:string[])=>string, route:string, board:string):
    (req:Request, res:Response)=>void{
     return this.templater.renderView(template_fn, route, board);
  }
}
