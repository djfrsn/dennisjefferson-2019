require('dotenv').config();
const express = require('express');
const next = require('next');

const cookiesMiddleware = require('universal-cookie-express');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

const handle = app.getRequestHandler();

const routes = require('./routes');

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(bodyParser.json());
    server.use(cookiesMiddleware());

    server.use('/', routes);

    server.get('*', (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready http://localhost:3000 <');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
