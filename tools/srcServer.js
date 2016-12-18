import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */


const app = express();
const compiler = webpack(config);

app.set('port', (process.env.PORT || 5000));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
  // res.sendFile(path.join( __dirname, '../src/index.html'));
  res.sendFile(path.join(config.output.publicPath, '/dist/index.html'));
});

app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
   // open(`http://localhost:${port}`);
  }
});
