import {generic_page} from "../templates/generic-page-composite-template";

const port:number = parseInt(process.env.PORT);
export {port};

interface routeSettingsInterface {
  [route_id:string]:routeDetailsInterface;
}
interface routeDetailsInterface{
  pattern:string,
  template:(board:string, title_detail:string, react_body:string)=>string
}

const route_settings:routeSettingsInterface =
  {
      page: {pattern:"/:board/:page?",template: generic_page},
      thread: {pattern:"/:board/res/:num",template:generic_page},
      catalog: {pattern:"/:board/catalog",template:generic_page},
      archive: {pattern:"/:board/archive",template:generic_page}
  }
export {route_settings}
