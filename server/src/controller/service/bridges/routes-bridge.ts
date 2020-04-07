import {Model} from "../../../model/model";

export class RoutesBridge{
    model:Model;
    constructor(model:Model){
      this.model = model;
    }
    getMainPort():number{
        return this.model.getPort();
    }
    getRoutePattern(route:string){
       return this.model.getRouteObject(route).getPattern();
    }
    getRoutes():string[]{
      return this.model.getRouteList();
    }
}
