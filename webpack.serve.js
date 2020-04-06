const Versions = require(__dirname + "/versions.js");
const webpack = require('webpack');

const path = require('path');

process.env = {
  NODE_ENV: 'production',
  UI_VERS: Versions.ui_version_num,
  STYLE_VERS: Versions.stylesheet_version_num,
  SERVER_VERS: Versions.server_version_num,
  PORT: 4000
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
      new webpack.EnvironmentPlugin(['NODE_ENV', 'PORT'])
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
