//provied the logic for all route methods and startup functions

import { Request, Response } from "express";
import {RoutesBridge} from './bridges/routes-bridge';
import {TemplaterBridge} from './bridges/templater-bridge';
import {Model} from "../../model/model";
import {View} from "../../view/view";

//dependency injection > mixin
export class Route{
  model_reference:Model;
  view_reference:View;

  routes_bridge:RoutesBridge;
  templater_bridge:TemplaterBridge;
  constructor(model:Model, view:View){
    this.routes_bridge = new RoutesBridge(model);
    this.templater_bridge = new TemplaterBridge(view);
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
    var template_function:(...args:string[])=>string = this.routes_bridge.getRouteTemplateFunction(route);
    return (req:Request, res:Response) => this.templater_bridge.getRouteRendered(template_function, route, req.params("board"));
  }

  getStartupFunction(port:number):()=>void
  {
    return ()=>{
        //TemplateBridge
      console.log(this.templater_bridge.getStartupMessage(port));
    }
  }
}
