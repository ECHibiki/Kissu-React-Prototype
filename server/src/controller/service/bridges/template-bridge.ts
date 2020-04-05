import {View} from "../../../view/view";

export class TemplateBridge{
    static getStartupMessage(port:number, view:View):string{
        return view.getStartupMessage(port);
    }
    static getRouteRendered(route:string, view:View):string{
        return view.getRouteRendered(route);
    }
}
