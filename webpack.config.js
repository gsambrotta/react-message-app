var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src/app');

var config = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:4001',
		'webpack/hot/only-dev-server',
		APP_DIR + '/index.js'
	],

	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '/build/',
		filename: 'bundle.js'
	},

	plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loaders: ['react-hot', 'babel'],
				include: APP_DIR,
				exclude: /node_modules/
			},
			{
        test: /\.scss$/,
        include: /src/,
        loaders: [
            'style',
            'css',
            'autoprefixer?browsers=last 3 versions',
            'sass?outputStyle=expanded'
        ]
	    },
	    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url?limit=8192',
            'img'
        ]
    	},

		]
	}
};

module.exports = config;
