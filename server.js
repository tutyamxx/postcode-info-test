const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const magic = require('express-routemagic');

const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

magic.use(app, {
    routesFolder: 'routes',
    invokerPath: __dirname,
    allowSameName: true
});

app.listen(port, () => process.env.NODE_ENV !== 'test' ? console.log(`🖥️  Server runs and is listening on port\x1b[34m${port}\x1b[0m.`) : '');

module.exports = app;
