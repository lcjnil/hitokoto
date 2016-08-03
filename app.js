const Koa = require('koa');
const hitokotoApi = require('./api/hitokoto');
const cors = require('kcors');

const app = new Koa();

app.use(cors());
app.use(hitokotoApi.routes())
  .use(hitokotoApi.allowedMethods());

app.listen(3000);
