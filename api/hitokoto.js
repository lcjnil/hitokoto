const router = require('koa-router')();
const Hitokoto = require('../model/hitokoto');
const debug = require('debug')('app:api');

/**
 * @api {get} /rand Request a random hitokoto
 * @apiName GetRandHitokoto
 * @apiGroup Hitokoto
 *
 *
 * @apiSuccess {String} id ID of the Hitokoto.
 * @apiSuccess {String} hitokoto Content of the Hitokoto.
 * @apiSuccess {Date} date Date of the Hitokoto
 *
 * @apiSuccessExample Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "id":"111111111",
 *       "hitokoto":"呐，知道么，樱花飘落的速度，是每秒五厘米哦~",
 *       "date":"2016-08-03T15:10:39.878Z"
 *    }
 */
router.get('/rand', async (ctx) => {
  const cnt = await Hitokoto.count();
  const random = Math.floor(Math.random() * cnt);
  const [hitokoto] = await Hitokoto.find(null, null, { skip: random, limit: 1 }).exec();

  ctx.body = {
    id: hitokoto._id,
    hitokoto: hitokoto.hitokoto,
    date: hitokoto.date
  };
});

/** 
 * @api {post} / Create a new hitokoto
 * @apiName createHitokoto
 * @apiGroup Hitokoto
 * 
 * @apiParam {Object} hitokoto the hitokoto
 * @apiParamExample {json} Request-Example
 *    {
 *      "hitokoto": "十月的天没有下雪，风吹梧桐的果子在唱，他唱夏天被虫子啃出的窟窿和掉落的兄弟"
 *    }
 * 
 * @apiSuccess {hitokoto} the hitokoto
 * @apiSuccess {id} the id of the new hitokoto
 * @apiSuccess {date} the created date of the new hitokoto
 * 
 * @apiSuccessExample
 *    HTTP/1.1 200 OK
 *    {
 *      "hitokoto": "十月的天没有下雪，风吹梧桐的果子在唱，他唱夏天被虫子啃出的窟窿和掉落的兄弟",
 *      "date": "2016-08-04T13:43:50.123Z",
 *      "id": 1
 *    }
 */
router.post('/', async (ctx) => {
  const { hitokoto } = ctx.request.body;
  debug(hitokoto);
  const instance = await Hitokoto.create({ hitokoto });
  debug(instance);

  ctx.response.status = 200;
  ctx.response.body = instance.toJSON();
});

module.exports = router;
