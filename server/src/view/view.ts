import { Templater } from './service/templater';
import {Model} from "../model/model";

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

  getRouteRendered(route:string):string{
    return this.templater.renderView(route);
  }
}
