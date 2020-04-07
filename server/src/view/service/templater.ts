// Provides the logic for all template generation and startup messages

import {SettingsBridge} from "./bridges/server-settings-bridge";
import {Model} from "../../model/model";
import {View} from "../view";


export class Templater {
  settings_bridge:SettingsBridge;
  constructor(model:Model){
    this.settings_bridge = new SettingsBridge(model);
  }

  getStartUpText(port:number):string{
    return (this.settings_bridge.getStartUpMessage())(port, new Date().toString());
  }

  renderView(route:string){
    return `<p>asdf ${route}</p>`;
  }
}
