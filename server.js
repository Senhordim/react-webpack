const webpack = require('webpack');
const WebpckDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpckDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen( 3000, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Listening on http://localhost:3000')
})