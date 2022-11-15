/* eslint-disable no-console */
const app = require('./src/app');

const port = process.env.PORT;

app.listen(port, () => {
  console.log('API RUNNING ON PORT ', port);
});
