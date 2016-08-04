const Koa = require('koa');
const hitokotoApi = require('./api/hitokoto');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');

const app = new Koa();

app.use(cors());
app.use(bodyParser());

app.use(hitokotoApi.routes())
  .use(hitokotoApi.allowedMethods());

app.listen(3000);
