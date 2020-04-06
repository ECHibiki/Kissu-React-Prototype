// the route object is a class containing the nescicary information for a routes
// it is put into an array inside of the server settings to be retrieved
// from the model

export class RouteObject{
  pattern:string;
  template:(board:string, title_detail:string, react_body:string)=>string;
  constructor(pattern:string,
    template:(board:string, title_detail:string, react_body:string)=>string){
      this.pattern = pattern;
      this.template = template;
  }

  getPattern(){
    return this.pattern;
  }

  getTemplateFunction():(brd:string, title:string, body:string)
    =>string{
      return this.template;
    }

}
