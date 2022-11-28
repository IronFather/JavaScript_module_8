const path = require('path');

module.exports = {
    entry: 'src/index.js',
    mode: `development`,
    output: {
    filename: 'my-bundle.js',
    path: path.resolve(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\.scss$/i,
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                    presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    },
};