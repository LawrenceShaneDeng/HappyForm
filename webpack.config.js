'use strict';

// import webpack from 'webpack';

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
let externals = _externals();
let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    mode: 'production',
    entry: './app.js',
    externals: nodeModules,
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'build/service'),
        filename: 'bundle.js'
    },
    node: {
        __filename: false,
        __dirname: false
    },
    module: {
        rules: [
            {
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            "targets": {
                                "node": true
                            }
                        }]]
                    }
                },
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },
    optimization: {
        minimize: true
    }
};

function _externals() {
    let manifest = require('./package.json');
    let dependencies = manifest.dependencies;
    let externals = {};
    for (let p in dependencies) {
        externals[p] = 'commonjs ' + p;
    }
    return externals;
}
