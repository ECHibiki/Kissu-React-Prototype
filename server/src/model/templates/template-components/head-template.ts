var header_template = (board:string, title_detail:string) =>
`<title>/${board}/ - ${title_detail} | Kissu.moe</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
<!--<link rel="stylesheet" media="screen" href="/stylesheets/yotsu-kissu-b(${ process.env.UI_VERS }).css">-->
<link rel="stylesheet" media="screen" href="/stylesheets/yotsu-kissu-b.css">
<link rel="shortcut icon" href="/static/favicon.png">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.13.1/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.13.1/umd/react-dom.production.min.js"></script>
`;

export {header_template};
