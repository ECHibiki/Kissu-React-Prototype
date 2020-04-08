// Provides the logic for all template generation and startup messages
import { Request, Response } from "express";
import {SettingsBridge} from "./bridges/server-settings-bridge";
import {JSONBridge} from "./bridges/json-bridge";
import {Model} from "../../model/model";
import {View} from "../view";
import {JSRenderer} from "./js-renderer";


export class Templater {
  settings_bridge:SettingsBridge;
  json_bridge:JSONBridge;
  js_renderer:JSRenderer;
  constructor(model:Model){
    this.settings_bridge = new SettingsBridge(model);
    this.json_bridge = new JSONBridge(model);
    this.js_renderer = new JSRenderer(model);

    this.buildSendRequest = this.buildSendRequest.bind(this);
  }

  getStartUpText(port:number):string{
    return (this.settings_bridge.getStartUpMessage())(port, new Date().toString());
  }

  renderView(template_fn:(...args:string[])=>string, route:string, board:string, req:Request, res:Response){
    this.json_bridge.getJSONProperties(this.buildSendRequest, template_fn, route, board, req, res);
    //(req:Request, res:Response) => res.send(template_fn(, "b", "c"));
  }

  buildSendRequest(react_json:any, template_fn:(...args:string[])=>string, route:string, board:string, req:Request, res:Response) {
    try{
        let board_title:string = react_json["properties"]["title"];
        let react_body:string = this.js_renderer.renderReact(react_json['react_contents']);
        res.send(
          template_fn(
            board,
            board_title,
            react_body
          ));
      }
      catch(error){
        res
          .status(500)
          .send("error");
      }
  }

}
