
const port:number = 4000;
export {port};

interface routeSettingsInterface {
  [route_id:string]:routeDetailsInterface;
}
interface routeDetailsInterface{
  pattern:string,
  template:string
}

const route_settings:routeSettingsInterface =
  {
      page: {pattern:"/",template:"template"},
      thread: {pattern:"/a",template:"template"},
      catalog: {pattern:"/b",template:"template"},
      archive: {pattern:"/c",template:"template"}
  }
export {route_settings}
