// Provides the logic for all template generation and startup messages

import * as StartupInfo from "../../model/templates/startup-info";

import {View} from "../../view/view";


export class Templater{
  static instance:Templater;
  constructor(){}

  getStartUpText(port:number){
    return StartupInfo.startup_message(port, new Date().toString());
  }

  renderView(route:string){
    return `<p>asdf ${route}</p>`;
  }

  static getInstance(){
    if(this.instance == undefined){
      this.instance = new Templater();
    }
    return this.instance;
  }

}
