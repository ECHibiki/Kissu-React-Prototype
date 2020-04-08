const Versions = require(__dirname + "/easy-config/versions.js");
const Server = require(__dirname + "/easy-config/server-settings.js");
const webpack = require('webpack');

const path = require('path');

process.env = {
  NODE_ENV: 'development',
  UI_VERS: Versions.ui_version_num,
  UI_NAME: Server.react_name,
  STYLE_VERS: Versions.stylesheet_version_num,
  SERVER_VERS: Versions.server_version_num,
  PORT: Server.port,
  JSON_ROUTE: Server.json_route,
  REACT_ROUTE: Server.react_route,
  ROOT_DIR: __dirname
};


module.exports = {
    entry:{
      'server':'./server/src/index.ts'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", '.js']
    },
    mode: process.env.NODE_ENV,
    target: 'node',
    output: {
        filename: 'server.js',
        path: __dirname + '/'
    },
    plugins:[
      new webpack.EnvironmentPlugin([
        'NODE_ENV',
        'UI_VERS', 'UI_NAME',
        'STYLE_VERS', 'SERVER_VERS',
        'PORT', 'JSON_ROUTE', 'ROOT_DIR'
      ])
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
        ]
    },
};
