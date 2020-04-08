import express, { Request, Response } from 'express';
import {Model} from "../model/model";
import {View} from "../view/view";

import {Route} from './service/route';

export class Controller{

  model_reference:Model;
  view_reference:View;
  route:Route;
  constructor(app:any, model:Model, view:View){
      this.model_reference = model;
      this.view_reference = view;
      this.route = new Route(model, view);

      this.setRoutes(app);
      const PORT = this.route.getPort();
      let server=app.listen(PORT,
        this.route.getStartupFunction(PORT));
  }

  // retrieve from set of routes(obtained in models) an appropriate template
  // and pattern
  private setRoutes(app:any){
    const route_list = this.route.getRoutes();
    console.log(process.env.ROOT_DIR + '/pub');
    app.use(express.static('pub'));
    for (const route of route_list){
        app.get(
          this.route.getRoutePattern(route),
          this.route.getRouteFunction(route)
        );
    }
  }
}
