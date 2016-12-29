import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import httpProxy from 'http-proxy';

//import '../api/server';

/*eslint-disable no-console */

const app = express();

app.set('port', (process.env.PORT || 8001));

app.use(compression());
app.use(express.static('dist'));

const targetUrl = 'http://localhost:3002';

const proxy = httpProxy.createProxyServer({
  target: targetUrl,
  ws: true
});

// Proxy to API server
app.use('/api', (req, res) => {
  proxy.web(req, res, {target: targetUrl});
});

app.get('/', (req, res)=> {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.listen(app.get('port'), function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`http://localhost:${app.get('port')}`);
  }
});
