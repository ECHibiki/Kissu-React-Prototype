import express, { Request, Response } from 'express';
import {Model} from "../model/model";
import {View} from "../view/view";

import {Route} from './service/route';

export class Controller{

  model_reference:Model;
  view_reference:View;

  constructor(app:any, model:Model, view:View){
      this.model_reference = model;
      this.view_reference = view;

      this.setRoutes(app);
      const PORT = Route.getInstance().getPort(this.model_reference);
      let server=app.listen(PORT,
        Route.getInstance().getStartupFunction(this.view_reference, PORT));
  }

  private setRoutes(app:any){
    const route_list = Route.getInstance().getRoutes(this.model_reference);
    // retrieve from set of routes(obtained in models) an appropriate template
    // and pattern
    for (const route of route_list){
      console.log(Route.getInstance().getRoutePattern(route, this.model_reference));
        app.get(
          Route.getInstance().getRoutePattern(route, this.model_reference),
          Route.getInstance().getRouteFunction(route, this.view_reference)
        )
    }
  }
}
