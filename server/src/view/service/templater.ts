import * as StartupInfo from "../../model/service/startup-info";

import {View} from "../../view/view";

import * as String from "../../util/string";

export class Templater{
  static instance:Templater;
  constructor(){}

  getStartUpText(port:number){
    return String.printf(StartupInfo.startup_message,""+port, new Date().toString());
  }

  renderView(route:string){
    return "<p>asdf</p>";
  }

  static getInstance(){
    if(this.instance == undefined){
      this.instance = new Templater();
    }
    return this.instance;
  }

}
