const Versions = require(__dirname + "/easy-config/versions.js");
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')

const path = require('path');const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
    entry:{
      'ui':'./react/src/'
    },
    mode: NODE_ENV,
    plugins: [ new CompressionPlugin ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },
    output: {
        filename: `ui-bundle(${Versions.ui_version_num}).js`,
        path: __dirname + '/pub/js-ui',
    },
    optimization: {
     minimize: true,
    minimizer: [
    	new TerserPlugin({
	        terserOptions: {
	            keep_classnames: true,
	            keep_fnames: true
	        }
	      })
    	]    },
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
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {

    }
};
