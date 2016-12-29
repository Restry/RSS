var jsonServer = require('json-server');
var server = jsonServer.create();

var db = require('./db.js');

var router = jsonServer.router(db);
var middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// Add custom routes before JSON Server router
server.get('/sopsapi/api/User/PageList', function (req, res, next) {
  res.jsonp(db.reportlist);
  /*
    res.send(db.reportlist);
    res.flush();
    res.end();
  */
});
// Add custom routes before JSON Server router
server.get('/sopsapi/api/GlobalConfig', function (req, res, next) {
  res.jsonp(db.configs);
});
server.get('/sopsapi/api/Branch/Child', function (req, res, next) {
  res.jsonp(db.Branch);
});


// server.use(function (req, res, next) {
//   if (req.method === 'POST') {
//    setTimeout(function() {

//     var url = req.url.split('?')[0];
//     var queryUrls = url.split('/');
//     var lastQueryIde = queryUrls[queryUrls.length - 1];

//     res.send(db[lastQueryIde])
//     res.flush();
//     res.end();

//    }, 800);

//     return;
//   }

//   req.query = {}
//   // Continue to JSON Server router
//   next()
// })

server.use(jsonServer.rewriter({
  '/api/': '/',
  '/sopsapi/api/': '/',
  '/Workflow/': '/',
  '/WFItem/': '/'
}));

// Use default router
server.use(router);
server.listen(3002, function () {
  console.log('JSON Server is running:3002');
});
