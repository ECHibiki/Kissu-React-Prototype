import * as React from "react";
import {Thread, ThreadProperties} from "./Thread";
import { XMLHttpRequest } from 'xmlhttprequest-ts';
export type PageProperties = {
    board:string,
    page:number,
    threads:any,
    finishedCallBackFunction: ()=>void
}
type PageVariables = {
    spaced_threads:JSX.Element[],
    error:string
}

// TODO: Use threads.json to retrieve a list of all threads and have individual threads carry their own json data
export class Page extends React.Component<PageProperties, PageVariables>{

	count_of_all_threads_on_page:number = 0;
	count_of_all_threads_mounted:number = 0;

	constructor(props:any){
	  super(props);
	  this.setPageThreads = this.setPageThreads.bind(this);

	  this.returnThreadJSXObject = this.returnThreadJSXObject.bind(this);
	  this.defineStateThreadsArray = this.defineStateThreadsArray.bind(this);
	  this.maintainCountOfAllThreads = this.maintainCountOfAllThreads.bind(this);

    this.setPageThreads();
	}

	componentDidMount(){

	}

	maintainCountOfAllThreads(){
		this.count_of_all_threads_mounted++;
		if(this.count_of_all_threads_mounted == this.count_of_all_threads_on_page){
			this.props.finishedCallBackFunction();
		}

	}

	setPageThreads(){

    console.log(this.props.threads);

			var paged_json = this.props.threads;
			if(paged_json.length >= this.props.page-1){
				var threads_arr:JSX.Element[] = [];
				paged_json.forEach((thread_obj:any, index:number)=>{
					threads_arr.push(this.returnThreadJSXObject(thread_obj["posts"], index));
				});

				this.count_of_all_threads_on_page = threads_arr.length;
				this.count_of_all_threads_mounted = 0;

				this.defineStateThreadsArray(threads_arr);
			}
			else{
			   this.setState({error: "Page out of bounds"});
			}


	}

	threadQuickReply(thread_id:number, reply_id:number){
}

	returnThreadJSXObject(thread_obj:any, key:number):JSX.Element{
		var thread_details:ThreadProperties = {
			board: this.props.board as string,
			thread_id: thread_obj[0]["no"] as number,
			paged: thread_obj,
			threadQuickReply: this.threadQuickReply,
			finishedCallBackFunction: this.maintainCountOfAllThreads
		};
		return <Thread {...thread_details} key={key * 3}/>;
	}

	defineStateThreadsArray(threads:JSX.Element[]){
    var temp_s_threads:JSX.Element[] = [];
		for(var thread_ind = 0 ; thread_ind < threads.length ; thread_ind++){
		  temp_s_threads = [...temp_s_threads, threads[thread_ind]];
		  temp_s_threads = [...temp_s_threads, <br className="clear" key={thread_ind * 3 - 1} />];
		  temp_s_threads = [...temp_s_threads, <hr key={thread_ind * 3 - 2} />];
		}
	  this.state = {spaced_threads:temp_s_threads, error:null};
    console.log("--");
	}

	render(){
	   if(this.state.error)
		return (<p>{this.state.error}</p>)
	   return (<div id={"page-" + this.props.page + "-container"} className="page-container">
		     {this.state.spaced_threads}
		</div>);
	}
}
