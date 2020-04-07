// composite templates are to have next to no html in them

import {header_template} from "./template-components/head-template";
import {footer_template} from "./template-components/footer-template";
import {body_template} from "./template-components/body-template";

var generic_page = (board:string, title_detail:string, react_body:string) =>{
  let head = header_template(board, title_detail);
  let body = body_template(react_body);
  let footer = footer_template();
  return `<html>${head}${body}${footer}</html>`;
}

export {generic_page}
