const path = require('path');const {
  NODE_ENV = 'production',
} = process.env;

module.exports = {
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", '.js']
    },
    mode: NODE_ENV,
    target: 'node',
    output: {
        filename: 'app.js',
        path: __dirname + '/../'
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
