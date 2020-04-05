import express, { Request, Response } from "express";
import {RoutesBridge} from './bridges/routes-bridge';
import {TemplateBridge} from './bridges/template-bridge';
import {Model} from "../../model/model";
import {View} from "../../view/view";

export class Route{
  static instance:Route;
  constructor(){}

  getPort(model:Model):number{ return RoutesBridge.getMainPort(model) }

  getRoutes(model:Model):string[]{ return RoutesBridge.getRoutes(model)}

  getRoutePattern(route:string, model:Model):string{
    return RoutesBridge.getRoutePattern(route,model);
  }

  getRouteFunction(route:string, view:View)
      :(req:Request, res:Response)=>void
  {
    return function(req:Request, res:Response){
        res.send(TemplateBridge.getRouteRendered(route, view));
    }
  }

  getStartupFunction(view:View, port:number):()=>void
  {
    return function(){
      console.log(TemplateBridge.getStartupMessage(port, view));
    }
  }

  static getInstance():Route{
      if(this.instance == undefined){
        this.instance = new Route();
      }
      return this.instance;
  }

}
