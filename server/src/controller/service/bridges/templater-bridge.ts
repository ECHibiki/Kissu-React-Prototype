import {View} from "../../../view/view";
import express, { Request, Response } from "express";

export class TemplaterBridge{
    view:View;
    constructor(view:View){
      this.view = view;
    }
    getStartupMessage(port:number):string{
        return this.view.getStartupMessage(port);
    }
    getRouteRendered(template_fn:(...args:string[])=>string, route:string, board:string, req:Request, res:Response){
        this.view.getRouteRendered(template_fn,route,board, req, res);
    }
}
