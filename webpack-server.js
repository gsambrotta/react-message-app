import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';



export default (PORT) => {
  const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    proxy: {
      "*" : `http://localhost:${PORT - 1}`
    }
  });
  server.listen(PORT, 'localhost', function (err, result) {
    if (err) {
      return console.log(err);
    }
    console.log('Listening at' + PORT);
  });
}












