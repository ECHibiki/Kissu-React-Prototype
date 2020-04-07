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
  getReactElement(){
    let react_obj = this.react_aquisition_bridge.getReactElement();
    return React.createElement(react_obj);
  }

  renderReact():string{
        let react_element = this.getReactElement();
        let string_react = ReactDOMServer.renderToString(react_element);
        return string_react;
  }
}
