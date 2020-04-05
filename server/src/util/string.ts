var printf = function(...args:string[]):string{
	var template = args[0];
	for (let arg = 1 ; arg < arguments.length ; arg++){
		template = template.replace("%s", args[arg]);
	}
	return template;
}

export {printf}
