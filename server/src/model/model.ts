// contains the port information, server information and route information.
import * as StartupInfo from "./templates/startup-info";
import * as ServerSettings from "./settings/server-settings";
import * as ReactUI from "./templates/react-view";
import {RouteObject} from "./service/route-object";
import {JSONFetcher} from "./service/json-fetch";
import { Request, Response } from "express";
import React from "react";

interface routeObjectInterface{
  [route_name:string] : RouteObject
}

export class Model{

  route_objects:routeObjectInterface = {};
  json_fetch:JSONFetcher;
  constructor(){
      this.json_fetch = new JSONFetcher();

      for (const key in ServerSettings.route_settings) {
        if (ServerSettings.route_settings.hasOwnProperty(key)) {
          const element = ServerSettings.route_settings[key];
            this.route_objects[key] = new RouteObject(
              ServerSettings.route_settings[key]['pattern'],
              ServerSettings.route_settings[key]['template']);
        }
      }
  }

  getPort():number{
    return ServerSettings.port
  };

  getRouteObject(route:string):RouteObject{
      return this.route_objects[route];
  };

  getStartUpMessage():(port:number, date:string)=>string {
    return StartupInfo.startup_message;
  }

  getRouteList():string[]{
    var list:string[] = [];
    for (const key in this.route_objects) {
      if (this.route_objects.hasOwnProperty(key)) {
        list.push(key);
      }
    }
    return list;
  }

  getJSONProperties(
    send_request:(properties:any,
      template_fn:(...args:string[])=>string,
      route:string,
      board:string,
      req:Request,
      res:Response) => void,
    template_fn:(...args:string[])=>string,
    route:string,
    board:string, req:Request, res:Response){
      this.json_fetch.fetchAndParseProperties(
        send_request,
        template_fn,
        route,
        board, req, res);
  }
// TODO : Type
  getReactElement(){
    return ReactUI.react_view;
  }

}
