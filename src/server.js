const app = require('./app');

const server = app.listen(8641, () => {
  console.log('Example app listening at port %s', server.address().port);
});

module.exports = server;