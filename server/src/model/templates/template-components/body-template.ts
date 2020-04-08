var body_template = (react_string:string) =>
`
<body>
  <div id='contents'>${react_string}</div>
  <script src='/js-ui/${process.env.UI_NAME}(${process.env.UI_VERS}).js'></script>
</body>
`
export {body_template}
