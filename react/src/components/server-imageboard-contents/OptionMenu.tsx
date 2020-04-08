// Use dragable to create a post option selector
// place things in localstorage
// also hooks and refs to relevant things

import * as React from "react";
import Draggable, {DraggableCore} from 'react-draggable';

export type OptionMenuProperties = {optionSetCallBack:()=>void}

type OptionMenuVariables = {
	show_menu:boolean,
	grab_pointer:string,

	toggle_options:boolean
}

export class OptionMenu extends React.Component<OptionMenuProperties, OptionMenuVariables>{

	constructor(props:any){
		super(props);
		this.state=({show_menu: false, grab_pointer:"grab", toggle_options:false});

		this.toggleShowMenu = this.toggleShowMenu.bind(this);
		this.setOptionLocalStore = this.setOptionLocalStore.bind(this);

 	}

	toggleShowMenu(){
		this.setState({show_menu: !this.state.show_menu});
	}


	setOptionLocalStore(e:React.MouseEvent<HTMLInputElement, MouseEvent>){
	}

	render(){
		return <span className="options-container">
			<a onClick={this.toggleShowMenu} style={{cursor:"pointer"}}>[ Options ]</a>
			 </span>
	}

}
