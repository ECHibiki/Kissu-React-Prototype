import React from "react";
import ReactDOMServer from 'react-dom/server';
import {Model} from '../../model/model';

import {ReactAquisitionBridge} from './bridges/react-aquisition-bridge';

export class JSRenderer{
  model:Model;
  react_aquisition_bridge:ReactAquisitionBridge;
  constructor(model:Model){
    this.model = model;
    this.react_aquisition_bridge = new ReactAquisitionBridge(model);
  }

// TODO: apply type to these
  getReactElement(react_json:any){
    let react_obj = this.react_aquisition_bridge.getReactElement();
    react_json.standard_input = {thread_id:0, board:"b", paged:true, page:1};
    return React.createElement(react_obj,react_json);
  }

  renderReact(react_json:any):string{
        let react_element:any = this.getReactElement(react_json);
        let string_react = ReactDOMServer.renderToString(react_element);
        return string_react;
  }
}
