// const path = require('path');
// const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const javascript = {
//     test: /\.(js)$/,
//     use: [{
//         loader: 'babel-loader',
//         options: { presets: ['env'] }
//     }],
// };

// const styles = {
//     test: /\.(css)$/,
//     use: ExtractTextPlugin.extract(['css-loader?sourceMap'])
// };

// // const uglify = new webpack.optimize.UglifyJsPlugin({ 
// //     compress: { warnings: false }
// // });

// const config = {
//     target: "web",
//     entry: {
//         App: './src/index.js'
//     },
//     devtool: 'source-map',
//     output: {
//         filename: 'main.js',
//         path: path.resolve(__dirname, 'public', 'dist')
//     },
//     module: {
//         rules: [javascript, styles]
//     },
//     // array of our plugins - uncomment to uglify
//     // plugins: [uglify]
//     plugins: [
//         new ExtractTextPlugin('style.css'),
//     ]
// };

// process.noDeprecation = true;

// module.exports = config;


const path = require('path');

const styles = {
    test: /\.(css)$/,
    use: ['style-loader', 'css-loader']
};

const images = {
    test: /\.(png|svg|jpg|gif)$/,
    use: [
        'file-loader'
    ]
}

// const uglify = new webpack.optimize.UglifyJsPlugin({ 
//     compress: { warnings: false }
// });

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [styles, images]
    },
};
