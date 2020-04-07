import {Model} from "../../../model/model";

export class SettingsBridge{
  model_ref:Model;

  constructor(model:Model){
    this.model_ref = model;
  }

  getStartUpMessage():(port:number, date:string)=>string{
    return this.model_ref.getStartUpMessage();
  }
}
