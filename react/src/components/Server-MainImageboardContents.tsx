// This file contains information components such as the post form, page navigation, catalog, threads, posts, delete form and images. At current time it probably does not include everything listed, but these are the plans
// Cursor change is set in delete form which also handles outside events.

import * as React from "react";


// Where threads and delete fields are placed
import {DeleteForm, DeleteFormProperties} from "./server-imageboard-contents/DeleteForm";
// QR form
import {QuickReply, QuickReplyProperties} from "./server-imageboard-contents/QuickReply";
// Options menu
import {OptionMenu, OptionMenuProperties} from "./server-imageboard-contents/OptionMenu";
// Update and local navigation
import {NavButtons, NavButtonProperties} from "./server-imageboard-contents/NavButtons";

export type MainImageboardContentsProperties = {
	standard_input:any,
	threads: any
}

type MainImageboardContentsVariables = {
	options:object,
	time_since_last_update:string
}

// TODO: this component should retrieve properties for nav and passdown
export class MainImageboardContents extends React.Component<MainImageboardContentsProperties, MainImageboardContentsVariables>{

	information_holder_ref: React.RefObject<DeleteForm>;
	mounted:boolean;
	time_of_last_rebuild:number = Date.now();

	constructor(props:any){
		super(props);

		this.state = {options:{}, time_since_last_update:""};
		this.information_holder_ref = React.createRef();

		this.confirmUpdateClick = this.confirmUpdateClick.bind(this);
		this.sendDoneEvents = this.sendDoneEvents.bind(this);
		this.optionSetRebuild = this.optionSetRebuild.bind(this);
		this.mounted = false;
	}

	componentDidMount(){

	}

	sendDoneEvents(){
		var mounted_event = new CustomEvent('mounted');


		this.mounted = true;
	}


	createQuickReply(thread_id:number, post_id:number){}

	optionSetRebuild(){

		this.information_holder_ref.current.triggerRebuild();
	}

	confirmUpdateClick(time_since_last_update:string, recent_thread_time:number){
		// pass down new time since last update
		if(this.mounted && recent_thread_time > this.time_of_last_rebuild / 1000){
			this.information_holder_ref.current.triggerRebuild();
			this.time_of_last_rebuild = recent_thread_time;
		}
		this.setState({time_since_last_update: time_since_last_update});
	}

	render(){
		var delete_form_properties:DeleteFormProperties = {
			board: 'b',
			thread_id:0,
			page:1,
			paged: true,
			threads:this.props.threads,
			doneEventCallBack: this.sendDoneEvents
		}

		return (<div id="main-imageboard-contents">
			   <hr />
				<NavButtons paged={!!this.props.standard_input.paged} board={this.props.standard_input.board} confirmUpdateClick={this.confirmUpdateClick} time_string={this.state.time_since_last_update}/>
					<OptionMenu optionSetCallBack={this.optionSetRebuild}/>
 			   <br/><hr />
				<DeleteForm {...delete_form_properties} ref={this.information_holder_ref}/>
			    	<NavButtons paged={this.props.standard_input.paged} board={this.props.standard_input.board} confirmUpdateClick={this.confirmUpdateClick} time_string={this.state.time_since_last_update}/>
			</div>)
	}
}
