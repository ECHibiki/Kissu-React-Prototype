import { Templater } from './service/templater';
import {Model} from "../model/model";

export class View{
  model_reference:Model;
  constructor(model:Model){
    this.model_reference = model;
  }

  getStartupMessage(port:number):string{
    return Templater.getInstance().getStartUpText(port);
  }

  getRouteRendered(route:string):string{
    return Templater.getInstance().renderView(route);
  }
}
