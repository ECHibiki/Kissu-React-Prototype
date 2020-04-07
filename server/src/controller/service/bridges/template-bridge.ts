import {View} from "../../../view/view";

export class TemplateBridge{
    view:View;
    constructor(view:View){
      this.view = view;
    }
    getStartupMessage(port:number):string{
        return this.view.getStartupMessage(port);
    }
    getRouteRendered(route:string):string{
        return this.view.getRouteRendered(route);
    }
}
