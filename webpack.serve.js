const Versions = require(__dirname + "/versions.js");

const path = require('path');
const {
  NODE_ENV = 'development',
  UI_VERS = Versions.ui_version_num,
  STYLE_VERS = Versions.stylesheet_version_num
} = process.env;

module.exports = {
    entry:{
      'server':'./server/src/index.ts'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", '.js']
    },
    mode: NODE_ENV,
    target: 'node',
    output: {
        filename: 'server.js',
        path: __dirname + '/'
    },

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
