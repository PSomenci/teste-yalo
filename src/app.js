const express = require('express');
const cors = require('cors');
const { validationErrorMiddleware } = require('./middleware/validationError');

const app = express();

const estudanteRoute = require('./routes/estudanteRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(validationErrorMiddleware);
app.use(cors());

app.use(require('./middleware/error'));

app.use('/api/', estudanteRoute);

module.exports = app;
