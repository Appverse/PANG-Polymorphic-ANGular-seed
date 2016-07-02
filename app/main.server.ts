import {app} from './server/app';

let packageJson = require('../package.json');

let port = 3000;

app.listen(port, () => {
  console.log(`${packageJson.name} app listening on port ${port}`);
});
