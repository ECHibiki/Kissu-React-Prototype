import {Model} from "../../../model/model";

export class RoutesBridge{
    static getMainPort(model:Model):number{
        return model.getPort();
    }
    static getRoutePattern(route:string, model:Model){
       return model.getRouteObject(route).getPattern();
    }
    static getRoutes(model:Model):string[]{
      return model.getRouteList();
    }
}
