const Versions = require(__dirname + "/easy-config/versions.js");
const Server = require(__dirname + "/easy-config/server-settings.js");
const webpack = require('webpack');

const path = require('path');

process.env = {
  NODE_ENV: 'production',
  UI_VERS: Versions.ui_version_num,
  STYLE_VERS: Versions.stylesheet_version_num,
  SERVER_VERS: Versions.server_version_num,
  PORT: Server.port,
  JSON_ROUTE: Server.json_route
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
        'UI_VERS', 'STYLE_VERS', 'SERVER_VERS',
        'PORT', 'JSON_ROUTE'
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
