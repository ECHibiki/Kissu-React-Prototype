import React from "react";
import ReactDOMServer from 'react-dom/server';
import {Model} from '../../../model/model';

export class ReactAquisitionBridge{
  model:Model;
  constructor(model:Model){
    this.model = model;
  }

// TODO : Type
  getReactElement(){
    return this.model.getReactElement();
  }

}
