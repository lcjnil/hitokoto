const Koa = require('koa');
const debug = require('debug')('app');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  debug(`Request Time is ${ms}`);
});

app.use(ctx => {
  ctx.body = 'Hello Koa';
});

app.listen(3000);
