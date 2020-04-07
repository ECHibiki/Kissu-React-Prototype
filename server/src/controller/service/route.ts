//provied the logic for all route methods and startup functions

import express, { Request, Response } from "express";
import {RoutesBridge} from './bridges/routes-bridge';
import {TemplateBridge} from './bridges/template-bridge';
import {Model} from "../../model/model";
import {View} from "../../view/view";

//dependency injection > mixin
export class Route{
  model_reference:Model;
  view_reference:View;

  routes_bridge:RoutesBridge;
  template_bridge:TemplateBridge;
  constructor(model:Model, view:View){
    this.routes_bridge = new RoutesBridge(model);
    this.template_bridge = new TemplateBridge(view);
    this.model_reference = model;
    this.view_reference = view;
  }

  getPort():number{
    //RoutesBridge
    return this.routes_bridge.getMainPort()
  }

  getRoutes():string[]{
    //RoutesBridge
    return this.routes_bridge.getRoutes()
  }

  getRoutePattern(route:string):string{
    //RoutesBridge
    return this.routes_bridge.getRoutePattern(route);
  }

  getRouteFunction(route:string)
      :(req:Request, res:Response)=>void
  {
    return (req:Request, res:Response)=>{
      //TemplateBridge
        res.send(this.template_bridge.getRouteRendered(route));
    }
  }

  getStartupFunction(port:number):()=>void
  {
    return ()=>{
        //TemplateBridge
      console.log(this.template_bridge.getStartupMessage(port));
    }
  }
}
