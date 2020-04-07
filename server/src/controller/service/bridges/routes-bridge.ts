// gets the route object
import {Model} from "../../../model/model";

export class RoutesBridge{
    model:Model;
    constructor(model:Model){
      this.model = model;
    }
    getMainPort():number{
        return this.model.getPort();
    }
    getRoutePattern(route:string):string{
       return this.model.getRouteObject(route).getPattern();
    }
    getRouteTemplateFunction(route:string):(...args:string[])=>string{
       return this.model.getRouteObject(route).getTemplateFunction();
    }
    getRoutes():string[]{
      return this.model.getRouteList();
    }
}
